# Implementation Plan: Physical AI Book Knowledge System

**Branch**: `001-rag-backend-system` | **Date**: 2025-12-08 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-rag-backend-system/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implementation of a RAG (Retrieval-Augmented Generation) system for the Physical AI & Humanoid Robotics book. The system will allow users to query the book content and receive accurate, cited answers. The backend will be built using FastAPI with document ingestion from `/physical-ai-book/docs`, vector storage in Qdrant using Gemini embeddings, and answer generation through OpenAI Agents SDK.

## Technical Context

**Language/Version**: Python 3.11
**Primary Dependencies**: FastAPI, Uvicorn, Pydantic, Requests, python-dotenv, qdrant-client, OpenAI Agents SDK, Gemini API, markdown-it-py, pymupdf, html2text, python-frontmatter
**Storage**: Qdrant Cloud (vector database), local file storage for documentation
**Testing**: pytest for unit and integration tests
**Target Platform**: Linux server (backend service)
**Project Type**: Backend service with API endpoints
**Performance Goals**: Response time < 5 seconds for user queries, 99% uptime
**Constraints**: Must use existing backend folder structure, only modify/add files in `/physical-ai-book/backend`
**Scale/Scope**: Single user-focused Q&A system with potential for multi-user scaling

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **RAG-Powered Backend Architecture**: ✅ System will be built around RAG principles with full-book and selected-text QA modes
- **Tech Stack Adherence**: ✅ Will use locked tech stack (FastAPI, Qdrant, Gemini, OpenAI Agents SDK, etc.)
- **Environment and Dependency Management**: ✅ Will load from existing `.env` file and respect existing project structure
- **Document Ingestion Excellence**: ✅ Will handle markdown docs with proper metadata and traceability
- **OpenAI Agents SDK Requirement**: ✅ All chat completion will use OpenAI Agents SDK
- **Additional Constraints**: ✅ Code will be exclusively in `/physical-ai-book/backend`

## Project Structure

### Documentation (this feature)

```text
specs/001-rag-backend-system/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
# Backend RAG System
physical-ai-book/backend/
├── main.py                  # FastAPI app & routing
├── rag/
│   ├── __init__.py
│   ├── ingest.py           # Markdown → chunks → embeddings → Qdrant
│   ├── retrieve.py         # Query → embeddings → Qdrant search
│   ├── pipeline.py         # RAG pipeline logic
│   └── embeddings.py       # Gemini embedding generation
├── agents/
│   ├── __init__.py
│   └── book_agent.py       # OpenAI Agents SDK integration
├── utils/
│   ├── __init__.py
│   ├── env.py              # Load env vars
│   ├── parsing.py          # Markdown/pdf/html parsers
│   ├── chunking.py         # Text split logic
│   └── qdrant_client.py    # Qdrant client wrapper
├── requirements.txt        # Dependencies
├── .env                    # Existing env file (not recreated)
└── tests/                  # All tests
    ├── unit/
    ├── integration/
    └── contract/

# Existing book documentation to be indexed
physical-ai-book/docs/
├── *.md                    # Markdown files to be indexed
└── ...
```

**Structure Decision**: Backend-only project with RAG functionality following the specified structure. All code is located in `/physical-ai-book/backend` with dedicated modules for RAG, agents, and utilities.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| (none) | (none) | (none) |