# Tasks: Physical AI Book Knowledge System

**Input**: Design documents from `/specs/001-rag-backend-system/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure per implementation plan
- [x] T002 Initialize Python project with required dependencies
- [x] T003 [P] Configure linting and formatting tools

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Setup environment configuration management in `utils/env.py`
- [x] T005 [P] Implement Qdrant client wrapper in `utils/qdrant_client.py`
- [x] T006 [P] Setup error handling and logging infrastructure
- [x] T007 Create base models/entities that all stories depend on
- [x] T008 Configure Gemini API client for embeddings
- [x] T009 Create text parsing utilities in `utils/parsing.py`
- [x] T010 Create text chunking logic in `utils/chunking.py`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Query Physical AI Book Content (Priority: P1) 🎯 MVP

**Goal**: Implement full RAG QA functionality

**Independent Test**: Users can ask questions about the book content and receive accurate, cited answers

### Implementation for User Story 1

- [x] T011 [P] [US1] Create document ingestion module in `rag/ingest.py`
- [x] T012 [P] [US1] Implement embedding generation in `rag/embeddings.py`
- [x] T013 [US1] Implement vector storage in `rag/qdrant_store.py` (handled by `utils/qdrant_client.py`)
- [ ] T014 [US1] Implement retrieval pipeline in `rag/retrieve.py`
- [ ] T015 [US1] Implement RAG context assembly in `rag/pipeline.py`
- [ ] T016 [US1] Create OpenAI Agents SDK integration in `agents/book_agent.py`
- [ ] T017 [US1] Implement main query endpoint in `main.py`
- [ ] T018 [US1] Add validation and error handling for queries
- [ ] T019 [US1] Add logging for query operations

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Ingest and Index Documentation (Priority: P2)

**Goal**: Implement document ingestion functionality

**Independent Test**: Admins can trigger the ingestion process which reads all documentation from the book, processes it, and makes it available for retrieval without duplicating existing entries

### Implementation for User Story 2

- [ ] T020 [P] [US2] Enhance ingest module to handle multiple files in `rag/ingest.py`
- [ ] T021 [US2] Implement file change detection to avoid reprocessing unchanged files
- [ ] T022 [US2] Implement stats tracking for indexed documents and vectors
- [ ] T023 [US2] Implement health check endpoint in `main.py`
- [ ] T024 [US2] Implement stats endpoint in `main.py`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Query with Specific Selected Text (Priority: P3)

**Goal**: Implement selected-text QA functionality

**Independent Test**: Users can provide selected text along with their query and receive answers that are based solely on that provided text, without additional retrieval

### Implementation for User Story 3

- [ ] T025 [P] [US3] Implement selected text processing in `rag/pipeline.py`
- [ ] T026 [US3] Implement selected text query endpoint in `main.py`
- [ ] T027 [US3] Add validation for selected text queries
- [ ] T028 [US3] Integrate with User Story 1 components for consistent response format

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] TXXX [P] Documentation updates in docs/
- [ ] TXXX Code cleanup and refactoring
- [ ] TXXX Performance optimization across all stories
- [ ] TXXX [P] Additional unit tests in tests/unit/
- [ ] TXXX Security hardening
- [ ] TXXX Run quickstart.md validation
- [ ] TXXX Implement comprehensive error handling across modules
- [ ] TXXX Add comprehensive logging throughout the application

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence