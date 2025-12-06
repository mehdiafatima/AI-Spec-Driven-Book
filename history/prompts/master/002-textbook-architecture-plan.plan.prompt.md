---
id: 002
title: Textbook architecture plan
stage: plan
date: 2025-12-06
surface: agent
model: gemini-cli
feature: master
branch: master
user: user
command: /sp.plan Project: Textbook for "Physical AI & Humanoid Robotics" built with Docusaurus, authored through Gemini CLI + Spec-Kit Plus. Architecture sketch: - Documentation site generated using **Docusaurus v3**. - Content stored in `/docs` (MD/MDX) with a structured sidebar. - Chapters and setup guides mapped into folders as per course outline. - Spec-Kit pipeline: constitution → plan → tasks → implement → publish. - Each Spec-Kit step must output a **report** summarizing decisions and progress. - Deployment target: GitHub Pages using Docusaurus built-in CI workflow. Section structure: 1. **Introduction to Physical AI & Humanoid Robotics** - Overview of Physical AI - Embodied Intelligence - Course Goals & Learning Outcomes - Why Humanoids Matter - Week 1–2 coverage 2. **Setup Guides** - Setup Guide: Digital Twin Workstation - Setup Guide: Physical AI Edge Kit - Setup Guide: Cloud-Native Development 3. **Module 1: ROS 2 (Weeks 3–5)** - Module 1: ROS 2 - Chapter 1: Introduction to ROS 2 - Chapter 2: ROS 2 Nodes and Topics - Chapter 3: Services, Actions, and Parameters - Chapter 4: URDF Robot Modeling - Chapter 5: Launch Files and Package Management 4. **Module 2: Digital Twin (Weeks 6–7)** - Module 2: Digital Twin 5. **Module 3: NVIDIA Isaac (Weeks 8–10)** - Module 3: Isaac Sim 6. **Module 4: VLA & Humanoids (Weeks 11–13)** 7. **References** - Official Documentation (ROS 2, Isaac, Gazebo, Unity) - Peer-Reviewed Articles - Tutorials & Guides Research approach: - Use official sources only (NVIDIA Docs, ROS 2, Gazebo, Omniverse, Unitree). - Cross-reference every robotics claim with hardware feasibility. - Validate code examples using simulation before writing. - Follow a research-concurrent pattern: research → draft → refine in loops. - Keep everything compatible with **Docusaurus rendering constraints** (no broken MDX, valid syntax). Quality validation: - Every chapter must compile in Docusaurus (`npm run build` must pass). - All examples must reflect runnable ROS 2, Gazebo, and Isaac workflows. - Each week must include: 1. Theory 2. Example 3. Lab 4. Assessment - Glossary consistency checks on robotics terminology. - Automatic **progress report** generated after plan, tasks, and implementation. Decisions needing documentation: 1. Simulation preference: Gazebo first, Isaac second (Document tradeoffs). 2. Humanoid vs proxy robots (Unitree Go2, G1, or Hiwonder). 3. Workstation vs cloud simulation infrastructure. 4. Choice of VLA model (choose between OpenAI, Gemini, etc.). 5. ROS middleware versions (Humble or Iron). Testing strategy: - Validation per chapter using: - ROS 2 node compilation checks - Gazebo world loading - Isaac Sim rendering tests - Jetson deployment test (optional) - Docusaurus: - Lint/format checks - Sidebar integrity - Build success - Full book test: - Navigate through all chapters in browser - Verify MDX components and code blocks Outcome: A production-ready Docusaurus textbook covering all setup guides and 13 weeks of Physical AI & Humanoid Robotics, fully validated through reports and ready for GitHub Pages deployment.
labels: ["plan"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- specs/master/plan.md
tests:
---

## Prompt

/sp.plan Project:  
Textbook for "Physical AI & Humanoid Robotics" built with Docusaurus, authored through Gemini CLI + Spec-Kit Plus.

Architecture sketch:
- Documentation site generated using **Docusaurus v3**.
- Content stored in `/docs` (MD/MDX) with a structured sidebar.
- Chapters and setup guides mapped into folders as per course outline.
- Spec-Kit pipeline: constitution → plan → tasks → implement → publish.
- Each Spec-Kit step must output a **report** summarizing decisions and progress.
- Deployment target: GitHub Pages using Docusaurus built-in CI workflow.

Section structure:
1. **Introduction to Physical AI & Humanoid Robotics**
   - Overview of Physical AI  
   - Embodied Intelligence  
   - Course Goals & Learning Outcomes  
   - Why Humanoids Matter  
   - Week 1–2 coverage  

2. **Setup Guides**
   - Setup Guide: Digital Twin Workstation  
   - Setup Guide: Physical AI Edge Kit  
   - Setup Guide: Cloud-Native Development  

3. **Module 1: ROS 2 (Weeks 3–5)**
   - Module 1: ROS 2  
     - Chapter 1: Introduction to ROS 2  
     - Chapter 2: ROS 2 Nodes and Topics  
     - Chapter 3: Services, Actions, and Parameters  
     - Chapter 4: URDF Robot Modeling  
     - Chapter 5: Launch Files and Package Management  

4. **Module 2: Digital Twin (Weeks 6–7)**
   - Module 2: Digital Twin  

5. **Module 3: NVIDIA Isaac (Weeks 8–10)**
   - Module 3: Isaac Sim  

6. **Module 4: VLA & Humanoids (Weeks 11–13)**

7. **References**
   - Official Documentation (ROS 2, Isaac, Gazebo, Unity)  
   - Peer-Reviewed Articles  
   - Tutorials & Guides  

Research approach:
- Use official sources only (NVIDIA Docs, ROS 2, Gazebo, Omniverse, Unitree).  
- Cross-reference every robotics claim with hardware feasibility.  
- Validate code examples using simulation before writing.  
- Follow a research-concurrent pattern: research → draft → refine in loops.  
- Keep everything compatible with **Docusaurus rendering constraints** (no broken MDX, valid syntax).  

Quality validation:
- Every chapter must compile in Docusaurus (`npm run build` must pass).  
- All examples must reflect runnable ROS 2, Gazebo, and Isaac workflows.  
- Each week must include:  
  1. Theory  
  2. Example  
  3. Lab  
  4. Assessment  
- Glossary consistency checks on robotics terminology.  
- Automatic **progress report** generated after plan, tasks, and implementation.  

Decisions needing documentation:
1. Simulation preference: Gazebo first, Isaac second (Document tradeoffs).  
2. Humanoid vs proxy robots (Unitree Go2, G1, or Hiwonder).  
3. Workstation vs cloud simulation infrastructure.  
4. Choice of VLA model (choose between OpenAI, Gemini, etc.).  
5. ROS middleware versions (Humble or Iron).  

Testing strategy:
- Validation per chapter using:  
  - ROS 2 node compilation checks  
  - Gazebo world loading  
  - Isaac Sim rendering tests  
  - Jetson deployment test (optional)  
- Docusaurus:  
  - Lint/format checks  
  - Sidebar integrity  
  - Build success  
- Full book test:  
  - Navigate through all chapters in browser  
  - Verify MDX components and code blocks  

Outcome:
A production-ready Docusaurus textbook covering all setup guides and 13 weeks of Physical AI & Humanoid Robotics, fully validated through reports and ready for GitHub Pages deployment.

## Response snapshot

The `plan.md` for "Textbook for Physical AI & Humanoid Robotics" has been successfully generated and written to `D:\Desktop\hackathon\specs\master\plan.md`. The plan outlines the technical context, a constitution check, and the project structure, based on the provided requirements.

## Outcome

- ✅ Impact: A detailed implementation plan for the textbook project has been created, aligning with the project's constitution and user requirements.
- 🧪 Tests: No explicit tests were run for this operation.
- 📁 Files: `specs/master/plan.md` was created/modified.
- 🔁 Next prompts: The user should be informed that the plan is complete and asked for the next steps (e.g., proceed to task generation).
- 🧠 Reflection: The plan generation process successfully integrated the user's detailed project description into the `plan.md` template, including the constitution check.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
