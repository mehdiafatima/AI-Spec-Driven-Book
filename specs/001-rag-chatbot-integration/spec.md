# Feature Specification: Physical AI & Humanoid Robotics – RAG Chatbot

**Feature Branch**: `001-rag-chatbot-integration`  
**Created**: 2025-12-10  
**Status**: Draft  
**Input**: User description: "Project: Physical AI & Humanoid Robotics – RAG Chatbot Goal: Build a fully functional Retrieval-Augmented Generation (RAG) chatbot for the Physical AI & Humanoid Robotics book. The chatbot must integrate with the existing frontend located in src/ and work without runtime errors. Requirements 1. Frontend Integration Connect the chatbot to your existing UI in src/ (text input, response display). Display loading state and handle errors. Ensure smooth asynchronous UX. Note: Frontend is already built in /physical-ai-book/src/components, and the chatbot should integrate with these existing components so that it provides responses according to the book content. 2. Backend Setup Python backend in backend/. Use local embeddings with sentence-transformers (free, no paid API keys required). Load all Markdown (.md / .mdx) from docs/. Split documents into chunks with metadata: source, filename, id. Batch embeddings to avoid memory issues. 3. Qdrant Integration Connect to Qdrant using qdrant-client. Check if collection hackathon-chatbot exists; create if missing with proper vector size. Use COSINE similarity for vector search. Upsert embeddings in batches. Handle exceptions for collection existence, network errors, or embedding failures. 4. RAG Query Handling Embed user query with sentence-transformers. Retrieve top relevant chunks from Qdrant. Generate response using retrieved chunks (local summarization or simple rule-based if LLM unavailable). Return response to frontend. 5. Environment and Dependencies Use .env for Qdrant credentials and Gemini key (fallback to local embeddings if unavailable). Install dependencies: sentence-transformers qdrant-client fastapi python-dotenv langchain (optional) 6. Error Handling Handle missing docs, empty chunks, embedding failures. Default vector size if embedding fails. Log major steps: loading docs, chunking, embedding, upserting, querying. 7. Output Fully working RAG chatbot embedded into frontend. Able to answer questions based on book content accurately. No runtime errors. 8. Folder Structure backend/: contains ingest.py, main.py, RAG code. docs/: book Markdown files. src/: frontend UI components for chatbot. Instructions Generate complete working code for: backend/ingest.py (document ingestion, local embeddings, Qdrant upsert) backend/main.py (FastAPI RAG query handling) Frontend React/Tailwind component connected to /query endpoint Use local embeddings (sentence-transformers) instead of paid APIs. Include batching, robust error handling, and Qdrant integration. Ensure compatibility with environment variables and existing frontend. Reminder: I have already created frontend JSX components in /physical-ai-book/src/components; the chatbot should integrate directly with them."

## User Scenarios & Testing

### User Story 1 - Ask questions and get answers based on book content (Priority: P1)

As a user, I want to ask questions related to the "Physical AI & Humanoid Robotics" book through a chatbot interface and receive accurate answers derived directly from the book's content, so I can quickly find information.

**Why this priority**: This is the core functionality and provides direct value to the user, enabling them to interact with the book content.

**Independent Test**: A user can type a question into the chatbot interface and receive a relevant answer displayed in the UI, sourced from the book's content.

**Acceptance Scenarios**:

1.  **Given** I am on the book's website with the chatbot open, **When** I type a question like "What is embodied intelligence?" and submit it, **Then** I see a loading indicator, and then receive a concise answer sourced from the book content.
2.  **Given** I am on the book's website with the chatbot open, **When** I ask a question not directly covered in the book, **Then** I receive a response indicating that the information is not available in the book's content.

### User Story 2 - View loading and error states in the chatbot UI (Priority: P2)

As a user, I want to see clear visual feedback when the chatbot is processing my request (loading state) and when an error occurs, so I understand the system's status and can react accordingly.

**Why this priority**: Essential for a good user experience, providing transparency and preventing user confusion or frustration during delays or failures.

**Independent Test**: The chatbot UI correctly displays a loading indicator during processing and informative error messages when backend issues occur.

**Acceptance Scenarios**:

1.  **Given** I submit a question to the chatbot, **When** the backend is processing the request, **Then** a loading indicator is visibly displayed in the chatbot UI until a response or error is received.
2.  **Given** I submit a question to the chatbot, **When** an error occurs during processing (e.g., network issue, backend crash), **Then** an appropriate error message is displayed in the chatbot UI.

### Edge Cases

-   What happens when the `docs/` directory is empty or contains no `.md` / `.mdx` files? The ingestion process should log a warning and proceed without error.
-   How does the system handle very long user queries? Queries should be processed, and if they exceed embedding model limits, they should be truncated or rejected with an informative message.
-   What happens if Qdrant is unreachable or experiences connection issues? The system should log the error and display an appropriate message to the user in the frontend.
-   How are documents with unusual or malformed Markdown handled during chunking and embedding? The system should attempt to process them gracefully, skipping problematic sections if necessary and logging warnings.
-   What is the behavior if the embedding model fails to generate an embedding for a chunk or query? The system should fall back to a default vector size for Qdrant (if possible) or return an error for the query.

## Requirements

### Functional Requirements

-   **FR-001**: The system MUST provide a chatbot interface integrated into the existing Docusaurus frontend located in `physical-ai-book/src/components`.
-   **FR-002**: The chatbot UI MUST display a clear loading state while processing user queries.
-   **FR-003**: The chatbot UI MUST display informative error messages to the user when issues occur during query processing.
-   **FR-004**: The backend MUST be implemented as a Python application located in `physical-ai-book/backend/`.
-   **FR-005**: The backend MUST utilize `sentence-transformers` for generating local text embeddings.
-   **FR-006**: The backend MUST be capable of loading and processing all Markdown (`.md` and `.mdx`) files from the `physical-ai-book/docs/` directory.
-   **FR-007**: The document processing MUST include splitting loaded documents into coherent chunks, each retaining relevant metadata (e.g., source file, filename, and a unique ID).
-   **FR-008**: The embedding generation process MUST batch document chunks to optimize performance and prevent out-of-memory errors.
-   **FR-009**: The backend MUST establish a connection with Qdrant using the `qdrant-client` library.
-   **FR-010**: The backend MUST check for the existence of a Qdrant collection named `hackathon-chatbot` and automatically create it if it does not exist, configuring it with the correct vector size derived from the embedding model.
-   **FR-011**: The vector search within Qdrant MUST utilize COSINE similarity for optimal relevance ranking.
-   **FR-012**: The backend MUST upsert (update or insert) generated embeddings and their associated metadata into Qdrant in batches.
-   **FR-013**: The backend MUST implement robust error handling for all Qdrant operations, including collection existence checks, network connectivity issues, and embedding failures.
-   **FR-014**: Upon receiving a user query, the backend MUST embed the query using `sentence-transformers`.
-   **FR-015**: The backend MUST retrieve the top relevant document chunks from Qdrant based on the embedded user query.
-   **FR-016**: The backend MUST generate a coherent and relevant response to the user query, utilizing the content of the retrieved chunks. (Local summarization or simple rule-based if LLM unavailable.)
-   **FR-017**: The generated response from the backend MUST be returned to the frontend for display.
-   **FR-018**: Configuration settings for Qdrant credentials and an optional Gemini API key (with local embeddings as fallback) MUST be managed via a `.env` file.
-   **FR-019**: The backend MUST gracefully handle scenarios such as missing source documents, empty document chunks, and failures during the embedding process. A default vector size MUST be assumed if embedding fails during collection creation.
-   **FR-020**: The backend MUST log major operational steps, including document loading, chunking, embedding generation, Qdrant upsert operations, and query processing.
-   **FR-021**: The `physical-ai-book/backend/ingest.py` script MUST encapsulate the logic for document ingestion, local embedding generation, and batch upsertion to Qdrant.
-   **FR-022**: The `physical-ai-book/backend/main.py` script MUST implement the FastAPI application responsible for exposing the RAG query handling endpoint.
-   **FR-023**: The existing frontend React/Tailwind components (`physical-ai-book/src/components`) MUST be updated to connect and interact with the `/query` endpoint provided by the FastAPI backend.

### Key Entities

-   **Document**: A Markdown (`.md` or `.mdx`) file from the book's `docs/` directory, representing a unit of content to be processed.
-   **Chunk**: A smaller, semantically coherent segment derived from a Document, carrying metadata such as its original source file path, filename, and a unique identifier.
-   **Embedding**: A high-dimensional numerical vector representation of a Chunk or a User Query, capturing its semantic meaning, generated by `sentence-transformers`.
-   **User Query**: The natural language text input provided by the user to the chatbot, seeking information or answers.
-   **Response**: The generated natural language answer provided by the chatbot, synthesized from the retrieved relevant Chunks.

## Success Criteria

### Measurable Outcomes

-   **SC-001**: The chatbot successfully answers 90% of user questions directly related to the "Physical AI & Humanoid Robotics" book content with accurate and relevant information.
-   **SC-002**: The average response time for user queries submitted to the chatbot, from submission to display of the answer in the UI, is consistently under 5 seconds.
-   **SC-003**: The chatbot UI consistently displays appropriate loading indicators and clear, user-friendly error messages whenever the system is processing a request or encounters an issue.
-   **SC-004**: The document ingestion process (via `ingest.py`) successfully processes all `.md` and `.mdx` files present in the `physical-ai-book/docs/` directory within 10 minutes on a standard development machine, without encountering unhandled exceptions.
-   **SC-005**: The Qdrant collection `hackathon-chatbot` is either successfully created and populated with embeddings or correctly identified if pre-existing, ensuring zero-downtime upon subsequent `ingest.py` runs.