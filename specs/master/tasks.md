# Tasks: Textbook for "Physical AI & Humanoid Robotics"

**Input**: Design documents from `specs/master/`
**Prerequisites**: plan.md (required)

**Tests**: The current specification does not explicitly request test tasks for individual components, beyond general Docusaurus build validation and code example execution. Focus will be on ensuring content integrity and system functionality.

**Organization**: Tasks are grouped by logical phases and user stories to enable independent implementation and testing of each component.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths refer to the root of the Docusaurus project (repository root).
- Content will primarily reside in `docs/` within this structure.

---

## Phase 1: Setup (Project Initialization & Core Architecture)

**Purpose**: Initialize the Docusaurus project and establish the fundamental content structure.

- [X] T001 Initialize Docusaurus project at repository root.
- [X] T002 Configure Docusaurus site metadata in `docusaurus.config.js`.
- [X] T003 Install necessary MDX plugins for Docusaurus in `package.json`.
- [X] T004 Connect GitHub Repository for Docusaurus (configuration details in `docusaurus.config.js` or `.github/workflows`).
- [X] T005 Verify Docusaurus build passes locally by running `npm run build`.
- [X] T006 [P] Create base Docusaurus folder structure: `docs/`, `docs/setup-guides/`, `docs/modules/`, `docs/references/`.
- [X] T007 [P] Define initial sidebar structure in `sidebars.js` for:
    - Introduction to Physical AI & Humanoid Robotics
    - Setup Guides
    - Module 1: ROS 2
    - Module 2: Digital Twin
    - Module 3: NVIDIA Isaac
    - Module 4: VLA & Humanoids
    - References
- [X] T008 [P] Establish MDX components (callouts, tips, code blocks, diagrams) by creating/modifying `src/components/` and updating `docusaurus.config.js` or `docs/mdx.js`.
- [X] T009 Set naming conventions for all chapters and subchapters (document in `CONTRIBUTING.md`).
- [X] T010 Generate initial “Book Overview” page in `docs/introduction/overview.md`.

---

## Phase 2: Foundational (Cross-Cutting Examples & Guides)

**Purpose**: Develop and integrate core simulation examples and hardware setup guides that will be referenced across multiple chapters.

- [X] T011 Prepare ROS 2 launch-file examples for Module 1 in `docs/examples/ros2/`.
- [X] T012 Prepare Gazebo URDF + world examples for Module 2 in `docs/examples/gazebo/`.
- [X] T013 Add Isaac Sim workflows for Module 3 in `docs/examples/isaac/`.
- [X] T014 Implement optional Unity visualization for Digital Twin in `docs/examples/unity/` (if applicable).
- [X] T015 Create Jetson Orin setup guide in `docs/setup-guides/edge-kit.md`.
- [X] T016 Create Digital Twin workstation configuration guide in `docs/setup-guides/digital-twin.md`.
- [X] T017 Document RealSense D435i and IMU calibration workflows in `docs/setup-guides/sensor-calibration.md`.
- [X] T018 Document robot options (Go2, G1, TonyPi) and their integration in `docs/hardware/robots.md`.

---

## Phase 3: User Story 1 - Introduction to Physical AI & Humanoid Robotics (Weeks 1–2)

**Goal**: Complete the introductory content for the textbook, providing an overview of the field and learning outcomes.

**Independent Test**: Verify `docs/introduction/overview.md` and related pages render correctly in Docusaurus, and content aligns with course goals.

- [X] T019 [US1] Write Concept explanation for Physical AI in `docs/introduction/physical-ai-concept.md`.
- [X] T020 [US1] Detail Embodied Intelligence theory in `docs/introduction/embodied-intelligence.md`.
- [X] T021 [US1] Outline Course Goals & Learning Outcomes in `docs/introduction/learning-outcomes.md`.
- [X] T022 [US1] Explain "Why Humanoids Matter" in `docs/introduction/why-humanoids.md`.
- [X] T023 [US1] Integrate any relevant simulation workflows or code examples into `docs/introduction/` as needed.
- [X] T024 [US1] Draft Assessment + Lab exercises for Weeks 1-2 in `docs/introduction/assessment-lab.md`.
- [X] T025 [US1] Document troubleshooting common issues for Weeks 1-2 in `docs/introduction/troubleshooting.md`.

---

## Phase 4: User Story 2 - Setup Guides

**Goal**: Complete all setup guides for various development environments.

**Independent Test**: Verify all setup guides in `docs/setup-guides/` are complete, technically accurate, and provide clear instructions.

- [X] T026 [US2] Write content for "Digital Twin Workstation Setup Guide" in `docs/setup-guides/digital-twin-workstation.md`.
- [X] T027 [US2] Write content for "Physical AI Edge Kit Setup Guide" in `docs/setup-guides/edge-kit-setup.md`.
- [X] T028 [US2] Write content for "Cloud-Native Development Setup Guide" in `docs/setup-guides/cloud-native-dev.md`.
- [X] T029 [US2] Integrate relevant code examples or configurations into the setup guides.
- [X] T030 [US2] Draft Assessment + Lab exercises for Setup Guides in `docs/setup-guides/assessment-lab.md`.

---

## Phase 5: User Story 3 - Module 1: ROS 2 (Weeks 3–5)

**Goal**: Develop comprehensive content for the ROS 2 module.

**Independent Test**: Verify all ROS 2 chapters are complete, technically accurate, and code examples (linked from `docs/examples/ros2/`) are runnable.

- [X] T031 [US3] Write Chapter 1: Introduction to ROS 2 in `docs/modules/module-1-ros2/chapter-1-intro.mdx`.
- [X] T032 [US3] Write Chapter 2: ROS 2 Nodes and Topics in `docs/modules/module-1-ros2/chapter-2-nodes-topics.mdx`.
- [X] T033 [US3] Write Chapter 3: Services, Actions, and Parameters in `docs/modules/module-1-ros2/chapter-3-services-actions.mdx`.
- [X] T034 [US3] Write Chapter 4: URDF Robot Modeling in `docs/modules/module-1-ros2/chapter-4-urdf-modeling.mdx`.
- [X] T035 [US3] Write Chapter 5: Launch Files and Package Management in `docs/modules/module-1-ros2/chapter-5-launch-packages.mdx`.
- [X] T036 [US3] Integrate ROS 2 code examples (from `docs/examples/ros2/`) into respective chapters.
- [X] T037 [US3] Draft Assessment + Lab exercises for Module 1 in `docs/modules/module-1-ros2/assessment-lab.md`.

---

## Phase 6: User Story 4 - Module 2: Digital Twin (Weeks 6–7)

**Goal**: Develop comprehensive content for the Digital Twin module.

**Independent Test**: Verify Digital Twin content is complete, technically accurate, and simulation examples (linked from `docs/examples/gazebo/` and `docs/examples/unity/`) are runnable.

- [X] T038 [US4] Write content for Module 2: Digital Twin in `docs/modules/module-2-digital-twin/overview.mdx`.
- [X] T039 [US4] Integrate Gazebo URDF + world examples (from `docs/examples/gazebo/`) into the module.
- [X] T040 [US4] Integrate Unity visualization examples (from `docs/examples/unity/`) into the module.
- [X] T041 [US4] Draft Assessment + Lab exercises for Module 2 in `docs/modules/module-2-digital-twin/assessment-lab.md`.

---

## Phase 7: User Story 5 - Module 3: NVIDIA Isaac (Weeks 8–10)

**Goal**: Develop comprehensive content for the NVIDIA Isaac module.

**Independent Test**: Verify Isaac Sim content is complete, technically accurate, and workflows (linked from `docs/examples/isaac/`) are valid.

- [X] T042 [US5] Write content for Module 3: NVIDIA Isaac Sim in `docs/modules/module-3-isaac/overview.mdx`.
- [X] T043 [US5] Integrate Isaac Sim workflows (from `docs/examples/isaac/`) into the module.
- [X] T044 [US5] Draft Assessment + Lab exercises for Module 3 in `docs/modules/module-3-isaac/assessment-lab.md`.

---

## Phase 8: User Story 6 - Module 4: VLA & Humanoids (Weeks 11–13)

**Goal**: Develop comprehensive content for the VLA & Humanoids module.

**Independent Test**: Verify VLA & Humanoids content is complete, technically accurate, and relevant examples are provided.

- [X] T045 [US6] Write content for Module 4: VLA & Humanoids in `docs/modules/module-4-vla-humanoids/overview.mdx`.
- [X] T046 [US6] Integrate relevant examples and case studies for VLA & Humanoids.
- [X] T047 [US6] Draft Assessment + Lab exercises for Module 4 in `docs/modules/module-4-vla-humanoids/assessment-lab.md`.

---

## Phase 9: User Story 7 - References

**Goal**: Compile a comprehensive list of references for the textbook.

**Independent Test**: Verify `docs/references.md` lists all required official documentation, peer-reviewed articles, and tutorials.

- [X] T048 [US7] Compile Official Documentation references (ROS 2, Isaac, Gazebo, Unity) in `docs/references.md`.
- [X] T049 [US7] Compile Peer-Reviewed Articles references in `docs/references.md`.
- [X] T050 [US7] Compile Tutorials & Guides references in `docs/references.md`.

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Finalize deployment, quality assurance, and overall project reporting.

- [X] T051 Configure GitHub Pages CI workflow in `.github/workflows/deploy.yml`.
- [X] T052 Add GitHub Actions file for Docusaurus deployment in `.github/workflows/deploy.yml`.
- [X] T053 Test auto-deployment `main → pages` to ensure successful publication.
- [X] T054 Final verification on live site after deployment.
- [X] T055 Check all chapters and setup guides load correctly in a web browser.
- [X] T056 Perform MDX linting across all `.mdx` files (`npm run lint` or similar).
- [X] T057 Fix broken images/links throughout the documentation.
- [X] T058 Verify all code samples are runnable and produce expected output.
- [X] T059 Generate final summary report for the entire textbook project (`REPORT.md`).
- [X] T060 After each task category completion, generate a **Report** summarizing: What was created, Coverage completeness, Issues found, Next step readiness (Meta-task, to be executed iteratively).

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - content architecture and initial project setup must be stable.
- **User Stories (Phases 3-9)**: All depend on Foundational phase completion - core examples and guides must be established for chapters to reference.
  - User stories (chapters/modules) can then proceed in parallel if content creators are available.
  - Or sequentially in logical order as presented (Introduction -> Setup -> Module 1 -> ...).
- **Polish (Phase 10)**: Depends on all desired user stories being complete.

### User Story Dependencies

- Individual user stories (chapters/modules) are largely independent in terms of content creation, but may benefit from sequential development for flow.
- For example, Module 1 (ROS 2) should ideally be completed before modules that build upon ROS 2 concepts.

### Within Each User Story

- Tasks within a user story are generally sequential: concept -> theory -> examples -> assessment.
- Code examples and simulation workflows should be integrated as they become relevant in the content.

### Parallel Opportunities

- Many tasks within Phase 1 (Setup) can run in parallel (e.g., configuring metadata and creating folder structure).
- Many tasks within Phase 2 (Foundational) can run in parallel (e.g., preparing ROS 2, Gazebo, and Isaac examples can be done by different individuals).
- Once the Foundational phase completes, multiple content creators can work on different User Story phases (chapters/modules) in parallel.
- Within User Story phases, content writing (Txxx [USx] Write content for...) can often be parallelized if structured well.
- QA tasks in Phase 10 can be done in parallel (e.g., linting, checking links, verifying code samples).

---

## Implementation Strategy

### MVP First (Introduction & Setup Guides)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - provides core examples and guides)
3. Complete Phase 3: User Story 1 (Introduction)
4. Complete Phase 4: User Story 2 (Setup Guides)
5. **STOP and VALIDATE**: Ensure initial Docusaurus site is functional with intro and setup guides.
6. Deploy/demo if ready.

### Incremental Delivery

1. Complete Setup + Foundational -> Core framework and examples ready.
2. Add User Story 1 (Introduction) -> Test independently -> Deploy/Demo.
3. Add User Story 2 (Setup Guides) -> Test independently -> Deploy/Demo.
4. Add User Story 3 (Module 1 ROS 2) -> Test independently -> Deploy/Demo.
5. Continue iteratively with subsequent User Stories.
6. Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together.
2. Once Foundational is done:
   - Developer A: User Story 1 (Introduction)
   - Developer B: User Story 2 (Setup Guides)
   - Developer C: User Story 3 (Module 1 ROS 2)
   - Developer D: User Story 4 (Module 2 Digital Twin)
3. Stories complete and integrate independently.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests (where applicable) before final content integration
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
