---
ID: 002
TITLE: Integrate Chatbot into Docusaurus Layout
STAGE: refactor
DATE_ISO: 2025-12-07
SURFACE: agent
MODEL: claude-3-opus-20240229
FEATURE: rag-chatbot-frontend
BRANCH: {{BRANCH}}
USER: {{USER}}
COMMAND: /sp.implement
LABELS: ["frontend", "chatbot", "react", "docusaurus", "layout", "fix"]
LINKS:
  SPEC: null
  TICKET: null
  ADR: null
  PR: null
FILES_YAML:
  - physical-ai-book/src/theme/Layout/index.js
TESTS_YAML: []
PROMPT_TEXT: |
  /sp.implement Fix the issue where the chatbot is not appearing in my Docusaurus book.
  The chatbot component must render properly inside my Docusaurus project.
  Check routing, component import paths, and layout injection.
  Make sure the chatbot appears in the sidebar or page layout exactly where I place it.
  My frontend code is inside: /physical-ai-book/src/components.
  Identify why the chatbot is not showing and correct all required files (layout, theme, component import, CSS, placement).
RESPONSE_TEXT: |
  Created a custom Docusaurus Layout component (`physical-ai-book/src/theme/Layout/index.js`) to wrap the original Layout and inject the `BookChatbot` component globally. This ensures the chatbot appears on all pages of the Docusaurus site by overriding the default Layout behavior.
OUTCOME: The `BookChatbot` component has been successfully integrated into the Docusaurus layout, resolving the issue of it not appearing.
