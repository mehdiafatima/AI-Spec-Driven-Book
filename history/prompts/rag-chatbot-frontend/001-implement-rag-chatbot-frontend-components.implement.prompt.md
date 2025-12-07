---
ID: 001
TITLE: Implement RAG Chatbot Frontend Components
STAGE: implement
DATE_ISO: 2025-12-07
SURFACE: agent
MODEL: claude-3-opus-20240229
FEATURE: rag-chatbot-frontend
BRANCH: {{BRANCH}}
USER: {{USER}}
COMMAND: /sp.implement
LABELS: ["frontend", "chatbot", "react", "docusaurus", "tailwind", "framer-motion"]
LINKS:
  SPEC: null
  TICKET: null
  ADR: null
  PR: null
FILES_YAML:
  - physical-ai-book/src/components/api.js
  - physical-ai-book/src/components/ChatBubble.jsx
  - physical-ai-book/src/components/TypingIndicator.jsx
  - physical-ai-book/src/components/Loader.jsx
  - physical-ai-book/src/components/BookChatbot.jsx
  - physical-ai-book/docusaurus.config.js
  - physical-ai-book/tailwind.config.js
  - physical-ai-book/postcss.config.js
  - physical-ai-book/src/css/custom.css
TESTS_YAML: []
PROMPT_TEXT: |
  /sp.implement ## Project
  Frontend Chatbot UI for **Physical AI & Humanoid Robotics** Docusaurus Book
  (All work must be created inside: `/physical-ai-book/src/components/`)

  ---

  ## Objective
  Create a fully functional **floating chatbot UI** inside the Docusaurus frontend.
  This prompt is ONLY for **frontend development**.
  No backend, no embeddings, no Qdrant, no ingestion.

  ---

  ## Requirements

  ### 1. Chatbot Component Files
  Generate the following inside:

  `/physical-ai-book/src/components/`

  - `BookChatbot.jsx`
  - `api.js`
  - Optional helper components (allowed):
    - `ChatBubble.jsx`
    - `TypingIndicator.jsx`
    - `Loader.jsx`

  ---

  ### 2. Chatbot UX + Features
  The chatbot must:

  - Show as a **floating circular button** (bottom-right)
  - Open a **slide-in chat panel** (right side)
  - Support:
    - Message list
    - User + bot message bubbles
    - Typing animation (3 dots)
    - Input bar with send button
    - Smooth transitions (Framer Motion)
  - Close (X) button on top
  - Fully responsive design

  ---

  ### 3. Styling Rules
  Use:

  - **React**
  - **Tailwind CSS**
  - **ShadCN UI components**
  - **Framer Motion** for animations

  Look & feel:

  - Minimal
  - Rounded edges
  - Soft shadow
  - Neutral palette
  - Clean typography

  ---

  ### 4. Frontend-Only API Function
  Inside `api.js` create:

  ```js
  export async function askBackend(question) {
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    return data.answer || "No response.";
  }
  ```
  Backend code is not included — only prepare the call.
RESPONSE_TEXT: |
  Successfully implemented the floating chatbot UI for the Docusaurus frontend, including all required components (`api.js`, `ChatBubble.jsx`, `TypingIndicator.jsx`, `Loader.jsx`, `BookChatbot.jsx`) and configuring Tailwind CSS in `docusaurus.config.js`, `tailwind.config.js`, `postcss.config.js`, and `src/css/custom.css`. All necessary npm packages were installed.
OUTCOME: All frontend components for the RAG chatbot UI have been implemented as per the requirements. Tailwind CSS and Framer Motion have been integrated.
