# Implementation Plan: Physical AI & Humanoid Robotics – RAG Chatbot

**Branch**: `001-rag-chatbot-integration` | **Date**: 2025-12-10 | **Spec**: [specs/001-rag-chatbot-integration/spec.md](specs/001-rag-chatbot-integration/spec.md)
**Input**: Feature specification from `/specs/001-rag-chatbot-integration/spec.md`

## Summary

The primary objective is to develop a fully functional Retrieval-Augmented Generation (RAG) chatbot for the "Physical AI & Humanoid Robotics" book. This chatbot will be seamlessly integrated with the existing Docusaurus frontend. The technical approach involves building a Python backend using FastAPI, leveraging `sentence-transformers` for local text embeddings, and utilizing Qdrant as the vector database. The system will handle document ingestion, query processing, and provide accurate, context-aware responses based on the book's content.

## Technical Context

**Language/Version**: Python 3.9+  
**Primary Dependencies**: FastAPI, Uvicorn, Pydantic, Requests, python-dotenv, qdrant-client, sentence-transformers, markdown-it-py, pymupdf, html2text, python-frontmatter, langchain (optional). (As per user prompt and constitution.)
**Storage**: Qdrant (vector database)  
**Testing**: `pytest`  
**Target Platform**: Linux/Windows server (for backend), Web browser (for Docusaurus frontend)
**Project Type**: Web application (with distinct backend and frontend components)  
**Performance Goals**:
-   RAG Query Response Time: Under 5 seconds (SC-002)
-   Document Ingestion Time: Under 10 minutes for all documents (SC-004)
**Constraints**:
-   Existing Docusaurus frontend (`physical-ai-book/src/components`) must be used without rebuilding components.
-   Backend must be located exclusively in `physical-ai-book/backend/`.
-   Must use local embeddings with `sentence-transformers`.
-   Environment variables for credentials (Qdrant, Gemini) must be managed via `.env` file.
-   The final solution must be free of runtime errors.
**Scale/Scope**: The chatbot must be able to accurately answer a wide range of questions based on the entire book content (SC-001).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

-   **RAG-Powered Backend Architecture**: PASSED. The plan is centered around RAG principles, including document ingestion, Qdrant vector storage, and supporting QA modes.
-   **Tech Stack Adherence**: PASSED. The plan generally adheres to the locked tech stack, incorporating specified libraries, and the user has explicitly chosen to prioritize the feature description's approach for LLM interaction.
-   **Environment and Dependency Management**: PASSED. The plan utilizes `.env` for environment variables and respects the existing project structure.
-   **Document Ingestion Excellence**: PASSED. The plan details handling Markdown files, chunking with metadata, and batch embedding for RAG optimization.
-   **OpenAI Agents SDK Requirement**: OVERRIDDEN by user decision. The user has chosen to prioritize the feature description's approach for LLM interaction, which involves direct Gemini API calls or local summarization/rule-based logic, bypassing the `OpenAI Agents SDK` for this feature. This deviation is explicitly acknowledged and accepted.

## Project Structure

### Documentation (this feature)

```text
specs/001-rag-chatbot-integration/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
physical-ai-book/
├── backend/
│   ├── ingest.py
│   ├── main.py
│   ├── pyproject.toml # or requirements.txt (for Python dependencies)
│   └── .venv/         # Python virtual environment
├── docs/
│   ├── intro.md
│   └── ...            # All book Markdown files
├── src/
│   ├── components/
│   │   ├── BookChatbot.jsx # Existing or to be updated chatbot component
│   │   └── ...             # Other existing frontend components
│   └── ...                 # Other Docusaurus project files
└── ...                     # Other Docusaurus project files
```

**Structure Decision**: The project will follow a specialized web application structure, aligning with the existing `physical-ai-book` directory, with distinct `backend/`, `docs/`, and `src/` (frontend) components. This structure is derived from the "Option 2: Web application" pattern, adapted to the current project's layout.
