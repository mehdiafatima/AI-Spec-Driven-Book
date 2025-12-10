# Tasks: RAG Chatbot Backend Implementation

**Input**: Initial backend code (main.py, ingest_book_content.py), project requirements.
**Prerequisites**: Existing backend setup with FastAPI, Qdrant, Gemini API.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup

**Purpose**: Verify and ensure the backend environment is correctly configured.

- [ ] T001 Backend Environment Verification: Confirm .env values and module existence in `physical-ai-book/backend/`
- [ ] T002 Backend Environment Verification: Validate all required external dependencies are listed in `physical-ai-book/backend/requirements.txt`
- [ ] T003 Backend Environment Verification: Install missing dependencies using `pip install -r physical-ai-book/backend/requirements.txt`

---

## Phase 2: Foundational (Core RAG System & API Endpoints) 🎯 MVP

**Purpose**: Implement and refine the core RAG components and necessary API endpoints.

### Document Processing System

- [ ] T004 [US1] Inspect and confirm markdown loader (`frontmatter`) usage in `physical-ai-book/backend/ingest_book_content.py`
- [ ] T005 [US1] Inspect and confirm text chunker (`split_text`) functionality in `physical-ai-book/backend/main.py`
- [ ] T006 [US1] Ensure all book files from `physical-ai-book/docs` are discoverable and processable by `physical-ai-book/backend/ingest_book_content.py`

### Embedding Engine Enhancements

- [ ] T007 [US1] Implement retry logic for `genai.embed_content_async` calls in `physical-ai-book/backend/main.py`
- [ ] T008 [US1] Enhance graceful error handling for embedding failures in `physical-ai-book/backend/main.py`

### Qdrant Vector Store & Retrieval Pipeline

- [ ] T009 [US1] Verify Qdrant collection creation on startup in `physical-ai-book/backend/main.py`
- [ ] T010 [US1] Verify upserting of vectorized chunks with metadata in `physical-ai-book/backend/main.py`'s `add_document` endpoint.
- [ ] T011 [US1] Verify top-k similarity search implementation in `physical-ai-book/backend/main.py`'s `chat` endpoint.
- [ ] T012 [US1] Verify query -> embed -> retrieve flow in `physical-ai-book/backend/main.py`'s `chat` endpoint.
- [ ] T013 [US1] Verify RAG context window assembly in `physical-ai-book/backend/main.py`'s `chat` endpoint.

### Book Agent Setup Refinement

- [ ] T014 [US1] Ensure `chat` endpoint effectively uses book context ONLY for answers in `physical-ai-book/backend/main.py`

### API Development: Missing Endpoints & Enhancements

- [ ] T015 [US1] Implement `POST /selected` endpoint for processing selected text in `physical-ai-book/backend/main.py`
- [ ] T016 [US1] Implement `GET /stats` endpoint to provide ingestion statistics in `physical-ai-book/backend/main.py`
- [ ] T017 [US1] Refine `POST /ingest` (covered by `add_document`) for robust batching and error reporting in `physical-ai-book/backend/main.py`

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Improve robustness, validation, and overall quality.

### Error Handling & Logging Enhancements

- [ ] T018 Add more specific exceptions and error handling to `physical-ai-book/backend/main.py`
- [ ] T019 Implement more structured logging for key operations in `physical-ai-book/backend/main.py` and `physical-ai-book/backend/ingest_book_content.py`

### Validation & Testing

- [ ] T020 Develop and execute ingestion flow tests for `physical-ai-book/backend/ingest_book_content.py`
- [ ] T021 Develop and execute vector retrieval tests for `physical-ai-book/backend/main.py`
- [ ] T022 Develop and execute agent answer quality tests for `physical-ai-book/backend/main.py`
- [ ] T023 Confirm overall API behavior with comprehensive testing for `physical-ai-book/backend/main.py`

### Final Check

- [ ] T024 Perform a final run of the backend to ensure all endpoints work without errors in `physical-ai-book/backend/main.py`
- [ ] T025 Report completion of all backend development tasks.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

---

## Parallel Opportunities

- Within phases, tasks marked with [P] can run in parallel. (Currently none explicitly marked [P] due to potential interdependencies within a single feature. Can be revisited if granularity increases).

---

## Implementation Strategy

### MVP First (Core RAG System & API Endpoints)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. **STOP and VALIDATE**: Test core RAG system and API endpoints independently
4. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup → Setup ready
2. Complete Foundational → Core RAG and basic API ready. Test independently → Deploy/Demo (MVP!)
3. Add Polish & Cross-Cutting Concerns → Improved robustness and logging.

---

## Notes

- Each task should be independently completable and testable where possible.
- Commit after each task or logical group.
- Stop at any checkpoint to validate.