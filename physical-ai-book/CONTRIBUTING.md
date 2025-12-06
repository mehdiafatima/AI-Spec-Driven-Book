# Contributing to the Physical AI & Humanoid Robotics Textbook

This document outlines the naming conventions and best practices for contributing to this Docusaurus-based textbook. Adhering to these guidelines ensures consistency and maintainability across the project.

## Naming Conventions

### File Names (for `.md` and `.mdx` content)
- **Format**: `lowercase-hyphenated.md` or `lowercase-hyphenated.mdx`
- **Purpose**: File names should be descriptive and reflect the content of the page.
- **Example**: `chapter-1-intro-ros2.mdx`, `physical-ai-concept.md`

### Folder Names (for organizing content)
- **Format**: `lowercase-hyphenated`
- **Purpose**: Organize related content logically.
- **Example**: `intro-physical-ai`, `setup-guides`, `module-1-ros2`

### Chapter/Page Titles (in Frontmatter)
- **Format**: Title Case
- **Purpose**: Used for display in the sidebar, navigation, and page headers.
- **Example**: `title: Introduction to ROS 2`, `title: Physical AI Edge Kit Setup`

### IDs (in Frontmatter)
- **Format**: `lowercase-hyphenated`
- **Purpose**: Unique identifier for the page, often used for linking. Should generally match the file name without the extension.
- **Example**: `id: chapter-1-intro-ros2`, `id: physical-ai-concept`

## Best Practices

- **Content Organization**: Follow the established folder structure under `docs/`.
- **MDX Usage**: Utilize MDX for richer content, but keep it clean and readable. Use standard markdown for simple pages.
- **Admonitions**: Use Docusaurus's built-in admonition (callout) syntax for notes, tips, warnings, etc. (e.g., `:::tip This is a tip :::`).
- **Code Blocks**: Always specify the language for code blocks for proper syntax highlighting (e.g., ````python`, ````cpp`, ````bash`).
- **Cross-linking**: Use relative paths for linking between internal Docusaurus pages.
- **Metadata**: Ensure all new `.mdx` or `.md` files include appropriate frontmatter (at a minimum `title` and `id`).
- **Review**: All contributions are subject to review for technical accuracy, pedagogical clarity, and adherence to these conventions.
