# Tasks: Physical AI & Humanoid Robotics – RAG Chatbot

**Feature Branch**: `001-rag-chatbot-integration`  
**Created**: 2025-12-10  
**Status**: Draft  
**Plan**: [specs/001-rag-chatbot-integration/plan.md](specs/001-rag-chatbot-integration/plan.md)

## Phase 1: Setup

- [ ] **Task 1.1**: Set up Python virtual environment in `physical-ai-book/backend/.venv`.
  - **Files**: `physical-ai-book/backend/.venv/` (created)
- [ ] **Task 1.2**: Install core Python dependencies: `fastapi`, `uvicorn`, `qdrant-client`, `sentence-transformers`, `python-dotenv`, `markdown-it-py`, `pymupdf`, `html2text`, `python-frontmatter`.
  - **Files**: `physical-ai-book/backend/pyproject.toml` or `requirements.txt` (modified)
- [ ] **Task 1.3**: Create a `.env` file template in `physical-ai-book/backend/` for Qdrant credentials and Gemini API key.
  - **Files**: `physical-ai-book/backend/.env.template` (created)
- [ ] **Task 1.4**: Update `physical-ai-book/package.json` to include `axios` for frontend API calls.
  - **Files**: `physical-ai-book/package.json` (modified)
- [ ] **Task 1.5**: Install frontend dependencies including `axios`.
  - **Files**: `physical-ai-book/node_modules/` (updated)

## Phase 2: Backend Core - Document Ingestion (`ingest.py`)

- [ ] **Task 2.1**: Implement document loading from `physical-ai-book/docs/` (`.md`, `.mdx` files).
  - **Files**: `physical-ai-book/backend/ingest.py` (created/modified)
- [ ] **Task 2.2**: Implement document chunking with metadata (source, filename, id).
  - **Files**: `physical-ai-book/backend/ingest.py` (modified)
- [ ] **Task 2.3**: Implement `sentence-transformers` for local embedding generation.
  - **Files**: `physical-ai-book/backend/ingest.py` (modified)
- [ ] **Task 2.4**: Implement batching of embeddings to avoid memory issues.
  - **Files**: `physical-ai-book/backend/ingest.py` (modified)
- [ ] **Task 2.5**: Implement Qdrant client initialization and collection existence check (`hackathon-chatbot`).
  - **Files**: `physical-ai-book/backend/ingest.py` (modified)
- [ ] **Task 2.6**: Implement Qdrant collection creation with proper vector size if missing.
  - **Files**: `physical-ai-book/backend/ingest.py` (modified)
- [ ] **Task 2.7**: Implement batch upsertion of embeddings into Qdrant.
  - **Files**: `physical-ai-book/backend/ingest.py` (modified)
- [ ] **Task 2.8**: Implement error handling for document loading, chunking, embedding, and Qdrant operations.
  - **Files**: `physical-ai-book/backend/ingest.py` (modified)
- [ ] **Task 2.9**: Implement logging of major steps in `ingest.py`.
  - **Files**: `physical-ai-book/backend/ingest.py` (modified)

## Phase 3: Backend Core - RAG Query Handling (`main.py`)

- [ ] **Task 3.1**: Set up FastAPI application in `physical-ai-book/backend/main.py`.
  - **Files**: `physical-ai-book/backend/main.py` (created/modified)
- [ ] **Task 3.2**: Create `/query` endpoint in `main.py` to receive user queries.
  - **Files**: `physical-ai-book/backend/main.py` (modified)
- [ ] **Task 3.3**: Implement embedding of user queries using `sentence-transformers`.
  - **Files**: `physical-ai-book/backend/main.py` (modified)
- [ ] **Task 3.4**: Implement retrieval of top relevant chunks from Qdrant using COSINE similarity.
  - **Files**: `physical-ai-book/backend/main.py` (modified)
- [ ] **Task 3.5**: Implement response generation using retrieved chunks (local summarization or rule-based logic).
  - **Files**: `physical-ai-book/backend/main.py` (modified)
- [ ] **Task 3.6**: Implement returning the generated response to the frontend.
  - **Files**: `physical-ai-book/backend/main.py` (modified)
- [ ] **Task 3.7**: Implement error handling for query embedding, Qdrant retrieval, and response generation.
  - **Files**: `physical-ai-book/backend/main.py` (modified)
- [ ] **Task 3.8**: Implement logging of major steps in `main.py`.
  - **Files**: `physical-ai-book/backend/main.py` (modified)
- [ ] **Task 3.9**: Implement loading of environment variables from `.env` (Qdrant credentials, Gemini key).
  - **Files**: `physical-ai-book/backend/main.py` (modified)

## Phase 4: Frontend Integration

- [ ] **Task 4.1**: Identify and adapt existing JSX components in `physical-ai-book/src/components` for chatbot input and display.
  - **Files**: `physical-ai-book/src/components/BookChatbot.jsx`, `physical-ai-book/src/components/api.js` (modified/created)
- [ ] **Task 4.2**: Create/modify a React component (e.g., `BookChatbot.jsx`) to connect to the `/query` endpoint.
  - **Files**: `physical-ai-book/src/components/BookChatbot.jsx` (modified/created)
- [ ] **Task 4.3**: Implement loading state display (spinner/indicator) in the frontend.
  - **Files**: `physical-ai-book/src/components/BookChatbot.jsx`, `physical-ai-book/src/components/Loader.jsx` (modified/created)
- [ ] **Task 4.4**: Implement error message display in the frontend.
  - **Files**: `physical-ai-book/src/components/BookChatbot.jsx` (modified)
- [ ] **Task 4.5**: Ensure smooth asynchronous user experience and input clearing.
  - **Files**: `physical-ai-book/src/components/BookChatbot.jsx` (modified)

## Phase 5: Testing and Validation

- [ ] **Task 5.1**: Write unit tests for `ingest.py` components (document loading, chunking, embedding, Qdrant interaction).
  - **Files**: `physical-ai-book/backend/tests/test_ingest.py` (created)
- [ ] **Task 5.2**: Write unit tests for `main.py` components (query embedding, Qdrant retrieval, response generation, API endpoint).
  - **Files**: `physical-ai-book/backend/tests/test_main.py` (created)
- [ ] **Task 5.3**: Perform integration testing: run `ingest.py`, then test `/query` endpoint with various questions.
  - **Files**: (No direct file changes, but involves running scripts and API calls)
- [ ] **Task 5.4**: Test frontend integration: verify UI states, query submission, and response display.
  - **Files**: (No direct file changes, but involves browser testing)
- [ ] **Task 5.5**: Validate accuracy of responses against book content (manual review).
  - **Files**: (No direct file changes, manual process)
- [ ] **Task 5.6**: Verify no runtime errors in both frontend and backend.
  - **Files**: (No direct file changes, but involves running and monitoring)
