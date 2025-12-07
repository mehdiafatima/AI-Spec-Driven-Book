import os
import requests
import frontmatter
import glob
from dotenv import load_dotenv
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

FASTAPI_URL = os.getenv("FASTAPI_URL", "http://127.0.0.1:8000")
DOCS_PATH = os.getenv("DOCS_PATH", "../../docs") # Default relative path if not set

def ingest_document(content: str, metadata: dict):
    """
    Sends a POST request to the FastAPI /add_document endpoint to ingest content.
    """
    endpoint = f"{FASTAPI_URL}/add_document"
    payload = {"content": content, "metadata": metadata}
    try:
        response = requests.post(endpoint, json=payload, timeout=60)
        response.raise_for_status()  # Raise an exception for HTTP errors (4xx or 5xx)
        logger.info(f"Successfully ingested: {metadata.get('source')} - {response.json()}")
    except requests.exceptions.RequestException as e:
        logger.error(f"Failed to ingest document {metadata.get('source')}: {e}")
        if e.response:
            logger.error(f"Response content: {e.response.text}")

def test_backend_connection():
    """Tests the backend's Gemini API connection via the /test-gemini endpoint."""
    logger.info("--- Testing backend Gemini connection... ---")
    try:
        response = requests.get(f"{FASTAPI_URL}/test-gemini", timeout=30)
        response.raise_for_status()
        logger.info(f"Backend connection test successful: {response.json()}")
        return True
    except requests.exceptions.RequestException as e:
        logger.error(f"Backend connection test failed: {e}")
        if e.response:
            logger.error(f"Response content: {e.response.text}")
        return False

def main():
    if not test_backend_connection():
        logger.error("Aborting ingestion due to failed backend connection test.")
        return

    logger.info(f"Starting document ingestion from {DOCS_PATH}")
    
    # Resolve the absolute path for DOCS_PATH
    # Assumes script is run from physical-ai-book/backend
    script_dir = os.path.dirname(__file__)
    docs_abs_path = os.path.abspath(os.path.join(script_dir, DOCS_PATH))
    
    logger.info(f"Searching for documents in absolute path: {docs_abs_path}")

    # Find all markdown files in the docs directory
    md_files = glob.glob(os.path.join(docs_abs_path, "**/*.md"), recursive=True)
    mdx_files = glob.glob(os.path.join(docs_abs_path, "**/*.mdx"), recursive=True)
    
    all_files = md_files + mdx_files
    
    if not all_files:
        logger.warning(f"No .md or .mdx files found in {docs_abs_path}. Please check DOCS_PATH in your .env file.")
        return

    for file_path in all_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                post = frontmatter.load(f)
                content = post.content
                
                # Basic metadata extraction
                metadata = post.metadata
                metadata["source"] = os.path.relpath(file_path, docs_abs_path) # Relative path as source
                metadata["full_path"] = file_path # Full path
                
                if 'title' not in metadata and 'id' in metadata:
                    metadata['title'] = metadata['id'].replace('-', ' ').title() # Generate title from ID if missing

                ingest_document(content, metadata)
        except Exception as e:
            logger.error(f"Error processing file {file_path}: {e}", exc_info=True)

if __name__ == "__main__":
    # Note: Ensure your FastAPI backend is running before executing this script.
    # Run: uvicorn main:app --reload
    main()
