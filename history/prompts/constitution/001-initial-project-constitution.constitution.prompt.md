---
id: 001
title: Initial project constitution
stage: constitution
date: 2025-12-06
surface: agent
model: gemini-cli
feature: none
branch: (unknown)
user: user
command: /sp.constitution Project: Textbook for "Physical AI & Humanoid Robotics" (Hackathon Project) Built using Docusaurus. Authored with Gemini CLI + Spec-Kit Plus. Core principles: - Ensure technical accuracy for all robotics and simulation concepts (ROS 2, Gazebo, Isaac, VLA, Humanoid Kinematics, Digital Twin). - Maintain pedagogical clarity using the pattern: explain → show → apply. - Emphasize system thinking: connect AI models, sensors, simulation, and humanoid robots. - Ground every example in real-world feasibility (Jetson kits, RTX workstations, or cloud setups). - Maintain uniform formatting, terminology, and chapter structure. - Generate a clear, concise **report after every Spec-Kit step** (constitution → plan → tasks → implement). Key standards: - Chapter/module structure:   1. Introduction to Physical AI & Humanoid Robotics   2. Setup Guides      - Setup Guide: Digital Twin Workstation      - Setup Guide: Physical AI Edge Kit      - Setup Guide: Cloud-Native Development   3. Module 1: ROS 2 (Weeks 3–5)      - Module 1: ROS 2        - Chapter 1: Introduction to ROS 2        - Chapter 2: ROS 2 Nodes and Topics        - Chapter 3: Services, Actions, and Parameters        - Chapter 4: URDF Robot Modeling        - Chapter 5: Launch Files and Package Management   4. Module 2: Digital Twin (Weeks 6–7)      - Module 2: Digital Twin   5. Module 3: NVIDIA Isaac (Weeks 8–10)      - Module 3: Isaac Sim   6. Module 4: VLA & Humanoids (Weeks 11–13)   7. References - All technical claims must be validated with official sources (NVIDIA, ROS 2, OpenAI, Unitree). - Simulation examples must follow Gazebo, Isaac Sim, or Unity constraints. - Hardware-related examples must be executable on RTX or Jetson hardware. - Use Markdown with optional Docusaurus MDX components. - Keep consistent headers, callouts, and code formatting. - After every Spec-Kit output, a structured **progress report** must be generated, summarizing decisions, changes, and next steps. Constraints: - Full 13-week course coverage across modules + setup guides + references. - Must comply with Docusaurus v3 structure and sidebar organization. - All content generated and organized through Spec-Kit Plus prompts. - Required software stack: ROS 2 Humble, Gazebo (Fortress/Ignition), Isaac Sim 4.x, Unity (optional). - Must support both workstation and cloud (AWS/Omniverse) compute paths. - Use only open-source or educational-license diagrams/code. - Every phase produces a **report** summarizing quality checks, coverage, and pending tasks. Success criteria: - Students can complete the capstone: "Humanoid robot receives a voice command → plans → navigates → perceives → manipulates an object." - All 13 weeks include theory, labs, and assessments. - ROS 2 code launches cleanly; Gazebo worlds load; Isaac Sim workflows are valid. - Entire book maintains consistency in terminology and chapter structure. - Docusaurus build passes without MDX errors and deploys successfully to GitHub Pages. - Each Spec-Kit phase includes a **report** validating completeness and readiness for the next step.
labels: ["constitution"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
tests:
---

## Prompt

/sp.constitution Project: Textbook for "Physical AI & Humanoid Robotics" (Hackathon Project)  
Built using Docusaurus. Authored with Gemini CLI + Spec-Kit Plus.

Core principles:
- Ensure technical accuracy for all robotics and simulation concepts (ROS 2, Gazebo, Isaac, VLA, Humanoid Kinematics, Digital Twin).  
- Maintain pedagogical clarity using the pattern: explain → show → apply.  
- Emphasize system thinking: connect AI models, sensors, simulation, and humanoid robots.  
- Ground every example in real-world feasibility (Jetson kits, RTX workstations, or cloud setups).  
- Maintain uniform formatting, terminology, and chapter structure.  
- Generate a clear, concise **report after every Spec-Kit step** (constitution → plan → tasks → implement).  

Key standards:
- Chapter/module structure:
  1. Introduction to Physical AI & Humanoid Robotics  
  2. Setup Guides  
     - Setup Guide: Digital Twin Workstation  
     - Setup Guide: Physical AI Edge Kit  
     - Setup Guide: Cloud-Native Development  
  3. Module 1: ROS 2 (Weeks 3–5)  
     - Module 1: ROS 2  
       - Chapter 1: Introduction to ROS 2  
       - Chapter 2: ROS 2 Nodes and Topics  
       - Chapter 3: Services, Actions, and Parameters  
       - Chapter 4: URDF Robot Modeling  
       - Chapter 5: Launch Files and Package Management  
  4. Module 2: Digital Twin (Weeks 6–7)  
     - Module 2: Digital Twin  
  5. Module 3: NVIDIA Isaac (Weeks 8–10)  
     - Module 3: Isaac Sim  
  6. Module 4: VLA & Humanoids (Weeks 11–13)  
  7. References  

- All technical claims must be validated with official sources (NVIDIA, ROS 2, OpenAI, Unitree).  
- Simulation examples must follow Gazebo, Isaac Sim, or Unity constraints.  
- Hardware-related examples must be executable on RTX or Jetson hardware.  
- Use Markdown with optional Docusaurus MDX components.  
- Keep consistent headers, callouts, and code formatting.  
- After every Spec-Kit output, a structured **progress report** must be generated, summarizing decisions, changes, and next steps.  

Constraints:
- Full 13-week course coverage across modules + setup guides + references.  
- Must comply with Docusaurus v3 structure and sidebar organization.  
- All content generated and organized through Spec-Kit Plus prompts.  
- Required software stack: ROS 2 Humble, Gazebo (Fortress/Ignition), Isaac Sim 4.x, Unity (optional).  
- Must support both workstation and cloud (AWS/Omniverse) compute paths.  
- Use only open-source or educational-license diagrams/code.  
- Every phase produces a **report** summarizing quality checks, coverage, and pending tasks.  

Success criteria:
- Students can complete the capstone: "Humanoid robot receives a voice command → plans → navigates → perceives → manipulates an object."  
- All 13 weeks include theory, labs, and assessments.  
- ROS 2 code launches cleanly; Gazebo worlds load; Isaac Sim workflows are valid.  
- Entire book maintains consistency in terminology and chapter structure.  
- Docusaurus build passes without MDX errors and deploys successfully to GitHub Pages.  
- Each Spec-Kit phase includes a **report** validating completeness and readiness for the next step.

## Response snapshot

The project constitution at `.specify/memory/constitution.md` has been successfully updated to version 0.1.0, incorporating the provided project name, core principles, key standards, constraints, and governance rules. A Sync Impact Report has been embedded as an HTML comment within the file.

## Outcome

- ✅ Impact: The project constitution has been created/updated with the provided details.
- 🧪 Tests: No tests were run for this operation.
- 📁 Files: .specify/memory/constitution.md was modified.
- 🔁 Next prompts: The user should be informed of the update and prompted for the next steps.
- 🧠 Reflection: The PHR creation script failed due to environment issues (bash not found). The PHR was created manually using agent-native tools.

## Evaluation notes (flywheel)

- Failure modes observed: `create-phr.sh` script failed on Windows due to `bash` not being available.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Improve PHR creation to be OS-agnostic or provide better fallback mechanisms.
