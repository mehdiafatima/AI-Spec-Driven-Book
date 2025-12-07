<!--
Version change: None -> 0.1.0
List of modified principles: All principles are new.
Added sections: Key Standards, Constraints.
Removed sections: None.
Templates requiring updates:
- .specify/templates/plan-template.md (⚠ pending)
- .specify/templates/spec-template.md (⚠ pending)
- .specify/templates/tasks-template.md (⚠ pending)
- All command files in .specify/templates/commands/*.md (⚠ pending)
- README.md, docs/quickstart.md, or agent-specific guidance files if present (⚠ pending)
Follow-up TODOs:
- TODO(RATIFICATION_DATE): Confirm original adoption date
-->
# Textbook for "Physical AI & Humanoid Robotics" (Hackathon Project) Constitution

## Core Principles

### I. Technical Accuracy
Ensure technical accuracy for all robotics and simulation concepts (ROS 2, Gazebo, Isaac, VLA, Humanoid Kinematics, Digital Twin).

### II. Pedagogical Clarity
Maintain pedagogical clarity using the pattern: explain → show → apply.

### III. System Thinking
Emphasize system thinking: connect AI models, sensors, simulation, and humanoid robots.

### IV. Real-World Feasibility
Ground every example in real-world feasibility (Jetson kits, RTX workstations, or cloud setups).

### V. Uniformity & Consistency
Maintain uniform formatting, terminology, and chapter structure.

### VI. Post-Step Reporting
Generate a clear, concise **report after every Spec-Kit step** (constitution → plan → tasks → implement).

## Key Standards

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

## Constraints

- Full 13-week course coverage across modules + setup guides + references.
- Must comply with Docusaurus v3 structure and sidebar organization.
- All content generated and organized through Spec-Kit Plus prompts.
- Required software stack: ROS 2 Humble, Gazebo (Fortress/Ignition), Isaac Sim 4.x, Unity (optional).
- Must support both workstation and cloud (AWS/Omniverse) compute paths.
- Use only open-source or educational-license diagrams/code.
- Every phase produces a **report** summarizing quality checks, coverage, and pending tasks.

## Governance
- **Success Criteria:**
  - Students can complete the capstone: "Humanoid robot receives a voice command → plans → navigates → perceives → manipulates an object."
  - All 13 weeks include theory, labs, and assessments.
  - ROS 2 code launches cleanly; Gazebo worlds load; Isaac Sim workflows are valid.
  - Entire book maintains consistency in terminology and chapter structure.
  - Docusaurus build passes without MDX errors and deploys successfully to GitHub Pages.
  - Each Spec-Kit phase includes a **report** validating completeness and readiness for the next step.

- **Amendment Procedure:** Amendments require documentation, approval, and a migration plan.
- **Versioning Policy:** Semantic versioning will be used for constitution updates (MAJOR.MINOR.PATCH).
- **Compliance Review:** All PRs/reviews must verify compliance with these principles.

**Version**: 0.1.0 | **Ratified**: TODO(RATIFICATION_DATE): Confirm original adoption date | **Last Amended**: 2025-12-06