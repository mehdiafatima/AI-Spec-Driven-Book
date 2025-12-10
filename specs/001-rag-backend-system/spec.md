# Feature Specification: Physical AI Book Knowledge System

**Feature Branch**: `001-rag-backend-system`
**Created**: 2025-12-08
**Status**: Draft
**Input**: User description: "The backend for **/physical-ai-book/backend** must implement a complete RAG system using: - FastAPI - Qdrant Cloud - Gemini Free API (for embeddings) - OpenAI Agents SDK (for final answer generation) - Existing backend files must be modified, not recreated. ## Requirements - Load env vars from `.env` (already present). - Use existing folder structure: - `main.py` → all API routes - `rag/` → ingest, retrieve, pipeline - `agents/` → agent logic - `utils/` → env, parsing, chunking, qdrant client - Ingest all markdown files from `/physical-ai-book/docs`. - Parse MD → text, chunk it (500–1200 chars), embed via Gemini, store in Qdrant. - Retrieval: generate embedding → similarity search → return top chunks. - Agent: integrates OpenAI Agents SDK + RAG tools → produce grounded answers. ## API Endpoints - `POST /ingest` → index all docs - `POST /query` → full RAG QA - `POST /selected` → answer using only provided selected text - `GET /health` → Gemini + Qdrant + Agent status - `GET /stats` → ingestion + vector count ## Constraints - Only backend work. - No frontend. - Do not touch things already built; only extend or fix. - All code stays inside `/physical-ai-book/backend`."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Query Physical AI Book Content (Priority: P1)

A user wants to ask questions about the Physical AI & Humanoid Robotics book content and receive accurate, sourced answers from the book's documentation.

**Why this priority**: This is the core functionality of the system. Without this, users cannot get answers to their questions about the book content.

**Independent Test**: Users can ask questions and receive responses that are grounded in the book's content, with proper citations to relevant chapters.

**Acceptance Scenarios**:

1. **Given** the system has ingested the book content, **When** a user submits a query about Physical AI concepts, **Then** the system returns a relevant answer with citations to specific book chapters that contain the information.

2. **Given** the user has a specific question about humanoid robotics, **When** they make a request, **Then** they receive a comprehensive response that synthesizes information from multiple book sections.

---

### User Story 2 - Ingest and Index Documentation (Priority: P2)

A system administrator needs to index the Physical AI & Humanoid Robotics book content so that users can ask questions about it.

**Why this priority**: This enables the core functionality of the system. Without indexed content, users cannot query the book effectively.

**Independent Test**: Admins can trigger the ingestion process which reads all documentation from the book, processes it, and makes it available for retrieval without duplicating existing entries.

**Acceptance Scenarios**:

1. **Given** the book's documentation exists in `/physical-ai-book/docs`, **When** an admin initiates the ingestion process, **Then** all documents are processed and made available for search and retrieval.

2. **Given** some documents have already been indexed, **When** the ingestion process is run again, **Then** only new or modified documents are processed and added to the index.

---

### User Story 3 - Query with Specific Selected Text (Priority: P3)

A user wants to ask questions that are specifically answered using only text they have selected, without retrieving from the broader document collection.

**Why this priority**: This provides an alternative mode of operation for users who want answers strictly grounded in text they've specifically chosen.

**Independent Test**: Users can provide selected text along with their query and receive answers that are based solely on that provided text, without additional retrieval.

**Acceptance Scenarios**:

1. **Given** a user has selected specific text from the book, **When** they submit a query about that text, **Then** the system provides an answer based only on the provided selected text, with no external retrieval.

---

### Edge Cases

- What happens when the system is temporarily unavailable during a query?
- How does the system handle queries when no relevant content is found in the documentation?
- How does the system handle very long input text for the selected text mode?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST accept user questions and return answers grounded in Physical AI book content with proper citations
- **FR-002**: System MUST provide functionality to index all documentation from `/physical-ai-book/docs` and store it for retrieval
- **FR-003**: System MUST provide capability to answer questions based only on text provided by the user
- **FR-004**: System MUST provide status reporting on system health and service availability
- **FR-005**: System MUST provide statistics on indexed content including document and vector counts
- **FR-006**: System MUST securely manage API keys and service endpoints
- **FR-007**: System MUST process and store text content in a way that enables semantic search and retrieval
- **FR-008**: System MUST generate answers that are grounded in retrieved content and avoid hallucinations
- **FR-009**: System MUST process documentation into appropriately sized segments that preserve semantic meaning
- **FR-010**: System MUST track source information for each content piece to enable proper citations in responses

### Key Entities

- **Book Content**: Segments of text from the Physical AI book with associated metadata including source location and chapter information
- **User Query**: Request from a user with a specific question about the book content
- **Retrieved Answer**: Response to user questions with proper citations to book content
- **Selected Text Query**: User question with provided text content for context-limited answering

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users receive relevant, accurate answers to Physical AI and robotics questions with proper citations within 5 seconds of query submission
- **SC-002**: System successfully indexes all documentation from `/physical-ai-book/docs` with 99% success rate
- **SC-003**: 95% of user queries return answers that are factually grounded in the book content and properly cited
- **SC-004**: System maintains 99% uptime during normal operation with health checks passing
- **SC-005**: Query response accuracy (relevance of answers to questions) achieves 90% positive user feedback rating