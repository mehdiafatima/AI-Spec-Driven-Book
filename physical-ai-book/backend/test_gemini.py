import google.generativeai as genai

genai.configure(api_key="AIzaSyBTXlvkJI7zdB9F09sDy6vPGABw-HMYQyM")

response = genai.embed_content(
    model="models/embedding-001",       # Embedding model
    content="Artificial intelligence in robotics is fascinating.",
    task_type="RETRIEVAL_DOCUMENT"      # Optimizes embeddings for retrieval/search
)

embedding_vector = response["embedding"]  # This is a list of floats
print(len(embedding_vector))  # e.g., 768 dimensions
