<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- Modified principles:
  - PRINCIPLE_1_NAME: "Project Scope and Backend Focus" → "RAG-Powered Backend Architecture"
  - PRINCIPLE_2_NAME: "Tech Stack Adherence" (new)
  - PRINCIPLE_3_NAME: "Incremental Development" → "Environment and Dependency Management"
  - PRINCIPLE_4_NAME: "Document Ingestion Excellence" (new)
  - PRINCIPLE_5_NAME: "OpenAI Agents SDK Requirement" (new)
- Added sections: Additional Constraints (Section 2) and Development Workflow (Section 3)
- Removed sections: None
- Templates requiring updates: ✅ plan-template.md (updated), ✅ spec-template.md (updated), ✅ tasks-template.md (updated)
- Follow-up TODOs: None
-->

# Physical AI & Humanoid Robotics — Backend Constitution

## Core Principles

### RAG-Powered Backend Architecture
Backend systems must be built around Retrieval-Augmented Generation (RAG) principles for the Physical AI & Humanoid Robotics book. Every feature must integrate with the RAG pipeline, supporting both full-book QA and selected-text QA modes. Architecture must support document ingestion, vector storage in Qdrant, and OpenAI Agents SDK integration.

### Tech Stack Adherence
Use only the locked tech stack: FastAPI, Uvicorn, Pydantic, Requests, python-dotenv, qdrant-client, OpenAI Agents SDK, Gemini API, markdown-it-py, pymupdf, html2text, python-frontmatter. No additional dependencies without explicit justification and approval.

### Environment and Dependency Management
All environment variables must be loaded from the existing .env file. Never recreate environment files or folders that already exist. Respect existing project structure in /physical-ai-book/backend and extend only when necessary.

### Document Ingestion Excellence
Document processing must handle markdown, PDF, and HTML formats using specified libraries. Each chunk must preserve metadata and maintain traceability to original source. Text splitting must optimize for RAG retrieval quality and Gemini embedding generation.

### OpenAI Agents SDK Requirement
All chat completion functionality must use the OpenAI Agents SDK as the primary interface. Agents must have access to RAG retrieval as a tool, support Gemini as internal model provider, refuse hallucination, and cite which chapter chunks were used in responses.

## Additional Constraints
<!-- Additional Constraints, Security Requirements, Performance Standards, etc. -->

Backend code must be located exclusively in `/physical-ai-book/backend`. No frontend or Docusaurus tasks allowed. Performance, clarity, and maintainability are top priorities. Every function must be deterministic and testable. API endpoints must include health checks and statistics reporting.

## Development Workflow
<!-- Development Workflow, Review Process, Quality Gates, etc. -->

Development must follow the existing backend folder structure. All work extends, optimizes, or fills in missing pieces rather than recreating structures. Code reviews must verify compliance with RAG architecture, tech stack adherence, and environment management constraints.

## Governance
Constitution supersedes all other practices. All PRs/reviews must verify compliance with RAG architecture, tech stack requirements, and existing structure preservation. Complexity must be justified with clear performance or maintainability benefits.

**Version**: 1.1.0 | **Ratified**: TODO(RATIFICATION_DATE): Date of original adoption | **Last Amended**: 2025-12-08
