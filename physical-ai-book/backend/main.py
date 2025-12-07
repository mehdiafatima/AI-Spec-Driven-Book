from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

from qdrant_client import QdrantClient
from qdrant_client.http.models import PointStruct, Distance, VectorParams
import google.generativeai as genai

from markdown_it import MarkdownIt
from uuid import uuid4
import logging

# Load environment variables
load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not QDRANT_URL or not QDRANT_API_KEY:
    raise ValueError("QDRANT_URL and QDRANT_API_KEY environment variables must be set.")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY environment variable must be set.")

genai.configure(api_key=GEMINI_API_KEY)
EMBEDDING_MODEL = "models/embedding-001" # Using a Gemini embedding model

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

qdrant_client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)

COLLECTION_NAME = "book_content" # Define Qdrant collection name

# Ensure Qdrant collection exists on startup
@app.on_event("startup")
async def startup_event():
    try:
        # Check if collection already exists
        collections = await qdrant_client.get_collections()
        if not any(c.name == COLLECTION_NAME for c in collections.collections):
            qdrant_client.recreate_collection(
                collection_name=COLLECTION_NAME,
                vectors_config=VectorParams(size=768, distance=Distance.COSINE), # Gemini embedding-001 has 768 dimensions
            )
            logger.info(f"Collection '{COLLECTION_NAME}' created.")
        else:
            logger.info(f"Collection '{COLLECTION_NAME}' already exists.")
    except Exception as e:
        logger.error(f"Error ensuring Qdrant collection: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to connect or ensure Qdrant collection: {e}")

async def get_embedding(text: str) -> list[float]:
    """Generates embeddings for the given text using the configured Gemini embedding model."""
    response = await genai.embed_content(
        model=EMBEDDING_MODEL,
        content=text,
        task_type="RETRIEVAL_DOCUMENT", # Specify task type for better performance
    )
    return response["embedding"]

app = FastAPI()

# Add CORS middleware
origins = [
    "http://localhost:3000",  # Default Docusaurus development port
    "http://127.0.0.1:3000",
    # Add your production frontend URL here when deploying
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "RAG Chatbot Backend is running!"}

# Simple Markdown to text conversion and chunking
def chunk_markdown_content(markdown_text: str, chunk_size: int = 500, chunk_overlap: int = 50):
    md = MarkdownIt()
    tokens = md.parse(markdown_text)
    
    # Very basic chunking strategy: collect text until chunk_size is reached
    # In a real-world scenario, you'd use a more sophisticated text splitter
    chunks = []
    current_chunk_text = ""
    for token in tokens:
        if token.type == 'inline' and token.content:
            text_to_add = token.content + " "
            if len(current_chunk_text) + len(text_to_add) > chunk_size:
                chunks.append(current_chunk_text.strip())
                current_chunk_text = text_to_add
            else:
                current_chunk_text += text_to_add
        elif token.type == 'text' and token.content: # Handle raw text tokens
             text_to_add = token.content + " "
             if len(current_chunk_text) + len(text_to_add) > chunk_size:
                chunks.append(current_chunk_text.strip())
                current_chunk_text = text_to_add
             else:
                current_chunk_text += text_to_add
                
    if current_chunk_text:
        chunks.append(current_chunk_text.strip())
        
    # Re-chunking with overlap (basic implementation)
    final_chunks = []
    for i, chunk in enumerate(chunks):
        if i > 0 and chunk_overlap > 0:
            previous_chunk = chunks[i-1]
            overlap_content = previous_chunk[-chunk_overlap:]
            final_chunks.append(overlap_content + chunk)
        else:
            final_chunks.append(chunk)

    return [c for c in final_chunks if c] # Filter out empty chunks


# Endpoint to add document content to Qdrant
class Document(BaseModel):
    content: str
    metadata: dict = {}

@app.post("/add_document")
async def add_document(doc: Document):
    if not doc.content:
        raise HTTPException(status_code=400, detail="Content cannot be empty.")

    try:
        chunks = chunk_markdown_content(doc.content)
        points = []
        for i, chunk in enumerate(chunks):
            embedding = await get_embedding(chunk)
            payload = {"text": chunk, "chunk_index": i, **doc.metadata}
            points.append(PointStruct(id=str(uuid4()), vector=embedding, payload=payload))

        if points:
            qdrant_client.upsert(
                collection_name=COLLECTION_NAME,
                wait=True,
                points=points
            )
            logger.info(f"Ingested {len(points)} chunks into Qdrant for document with metadata: {doc.metadata}")
            return {"status": "success", "message": f"Ingested {len(points)} chunks successfully."}
        else:
            return {"status": "warning", "message": "No valid chunks generated from content."}
    except Exception as e:
        logger.error(f"Error adding document: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to add document: {e}")

# Initialize Gemini Generative Model
GENERATIVE_MODEL = genai.GenerativeModel('gemini-pro')

@app.post("/chat")
async def chat(request: ChatRequest):
    if not request.query:
        raise HTTPException(status_code=400, detail="Query cannot be empty.")

    try:
        # Generate embedding for the user's query
        query_embedding = await get_embedding(request.query)

        # Perform vector search in Qdrant
        search_result = qdrant_client.search(
            collection_name=COLLECTION_NAME,
            query_vector=query_embedding,
            limit=5, # Retrieve top 5 relevant passages
        )
        
        # Extract relevant context from search results
        context_passages = [hit.payload["text"] for hit in search_result]
        
        # Prepare prompt for Gemini API
        prompt_parts = []
        if request.selected_text:
            prompt_parts.append(f"User provided selected text: {request.selected_text}")
            prompt_parts.append("Answer the following question based ONLY on the provided selected text and the retrieved context from the book.")
        else:
            prompt_parts.append("Answer the following question based ONLY on the retrieved context from the book.")
        
        prompt_parts.append("Retrieved context from the book:")
        for i, passage in enumerate(context_passages):
            prompt_parts.append(f"--- Passage {i+1} ---")
            prompt_parts.append(passage)
        prompt_parts.append(f"--- Question ---")
        prompt_parts.append(request.query)
        prompt_parts.append(f"--- Answer ---")

        combined_prompt = "\n".join(prompt_parts)
        
        # Generate answer using Gemini
        response = GENERATIVE_MODEL.generate_content(combined_prompt)
        
        logger.info(f"Chat query: '{request.query}', Answer: '{response.text}'")
        return {"status": "success", "answer": response.text, "context": context_passages}
    except Exception as e:
        logger.error(f"Error in chat endpoint: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to generate answer: {e}")