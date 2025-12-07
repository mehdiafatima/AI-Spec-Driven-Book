from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from uuid import uuid4
import logging
from fastapi.concurrency import run_in_threadpool

from qdrant_client import QdrantClient, models
import google.generativeai as genai

# Load environment variables
load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# --- Environment Variable Validation ---
if not QDRANT_URL or not QDRANT_API_KEY:
    raise ValueError("QDRANT_URL and QDRANT_API_KEY environment variables must be set.")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY environment variable must be set.")

# --- API & Client Initialization ---
genai.configure(api_key=GEMINI_API_KEY)
EMBEDDING_MODEL = "models/embedding-001"
GENERATIVE_MODEL = genai.GenerativeModel("gemini-pro")

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Initialize Qdrant client
qdrant_client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
COLLECTION_NAME = "book_content"

app = FastAPI()

# --- CORS Middleware ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- FastAPI Events ---
@app.on_event("startup")
def startup_event():
    """On startup, check if the Qdrant collection exists and create it if not."""
    try:
        qdrant_client.get_collection(collection_name=COLLECTION_NAME)
        logger.info(f"Collection '{COLLECTION_NAME}' already exists.")
    except Exception:
        logger.info(f"Collection '{COLLECTION_NAME}' not found. Creating collection.")
        qdrant_client.recreate_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
        )
        logger.info(f"Collection '{COLLECTION_NAME}' created successfully.")

# --- Text Processing ---
def split_text(text: str, chunk_size: int = 1000, chunk_overlap: int = 150) -> list[str]:
    """Splits text into overlapping chunks."""
    if not text:
        return []
    
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start += chunk_size - chunk_overlap
    return [c for c in chunks if c.strip()]

# --- API Endpoints ---
@app.get("/")
def read_root():
    return {"message": "RAG Chatbot Backend is running!"}

@app.get("/test-gemini")
async def test_gemini_endpoint():
    """Diagnostic endpoint to test the Gemini API embedding."""
    try:
        test_text = "This is a test."
        embedding_response = await run_in_threadpool(
            genai.embed_content,
            model=EMBEDDING_MODEL,
            content=[test_text],
            task_type="RETRIEVAL_DOCUMENT"
        )
        embedding = embedding_response['embedding']
        dim = len(embedding[0])
        logger.info(f"Successfully called Gemini embedding API (sync). Vector dimension: {dim}")
        return {"status": "success", "message": f"Successfully embedded test text (sync). Vector dimension: {dim}"}
    except Exception as e:
        logger.error(f"Error in /test-gemini endpoint: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Gemini API call failed: {str(e)}")

class Document(BaseModel):
    content: str
    metadata: dict = {}

@app.post("/add_document")
async def add_document(doc: Document):
    """Chunks content, generates embeddings in a batch, and upserts to Qdrant."""
    if not doc.content:
        raise HTTPException(status_code=400, detail="Content cannot be empty.")

    try:
        chunks = split_text(doc.content)
        if not chunks:
            return {"status": "warning", "message": "No valid chunks generated from content."}

        batch_size = 100
        for i in range(0, len(chunks), batch_size):
            batch_chunks = chunks[i:i + batch_size]
            
            embedding_response = await genai.embed_content_async(
                model=EMBEDDING_MODEL,
                content=batch_chunks,
                task_type="RETRIEVAL_DOCUMENT",
            )
            embeddings = embedding_response['embedding']

            points = [
                models.PointStruct(
                    id=str(uuid4()),
                    vector=embedding,
                    payload={"text": chunk, **doc.metadata}
                )
                for chunk, embedding in zip(batch_chunks, embeddings)
            ]

            qdrant_client.upsert(
                collection_name=COLLECTION_NAME,
                wait=True,
                points=points
            )
            logger.info(f"Ingested a batch of {len(points)} chunks into Qdrant.")

        logger.info(f"Finished ingesting all {len(chunks)} chunks from source: {doc.metadata.get('source', 'unknown')}")
        return {"status": "success", "message": f"Ingested {len(chunks)} chunks."}
    
    except Exception as e:
        logger.error(f"Error adding document: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))

class ChatRequest(BaseModel):
    question: str

@app.post("/chat")
async def chat(request: ChatRequest):
    """Handles chat requests by querying Qdrant and generating a response with Gemini."""
    if not request.question:
        raise HTTPException(status_code=400, detail="Question cannot be empty.")

    try:
        query_embedding_response = await genai.embed_content_async(
            model=EMBEDDING_MODEL,
            content=request.question,
            task_type="RETRIEVAL_QUERY",
        )
        query_embedding = query_embedding_response['embedding']

        search_result = qdrant_client.search(
            collection_name=COLLECTION_NAME,
            query_vector=query_embedding,
            limit=5,
        )
        context_passages = [hit.payload["text"] for hit in search_result]

        prompt = f"""
        You are a helpful assistant for the 'Physical AI Book'.
        Answer the following question based ONLY on the provided context passages from the book.
        If the answer is not found in the context, say 'I could not find an answer in the book content.'

        CONTEXT:
        {"---".join(context_passages)}

        QUESTION:
        {request.question}

        ANSWER:
        """

        response = await GENERATIVE_MODEL.generate_content_async(prompt)

        logger.info(f"Chat question: '{request.question}', Answer: '{response.text}'")
        return {"answer": response.text}
    
    except Exception as e:
        logger.error(f"Error in chat endpoint: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Failed to generate an answer.")
