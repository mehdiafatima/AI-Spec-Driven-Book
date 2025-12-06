---
sidebar_position: 7
---

# Troubleshooting Common Issues (Weeks 1-2)

This section provides a guide to common issues students might encounter during the initial weeks of the "Physical AI & Humanoid Robotics" course, focusing on introductory concepts and basic setup. It offers solutions and debugging tips to help overcome these hurdles.

## General Debugging Strategies

Before diving into specific problems, remember these general debugging principles:

1.  **Read the Error Message Carefully**: Error messages often contain valuable clues about what went wrong.
2.  **Check Prerequisites**: Ensure all required software, libraries, and hardware are installed and configured correctly as per setup guides.
3.  **Restart**: Sometimes, a simple restart of your IDE, terminal, or even your computer can resolve transient issues.
4.  **Isolate the Problem**: Try to narrow down the problem to the smallest possible component or line of code.
5.  **Search Online**: Use search engines with specific error messages or problem descriptions.
6.  **Consult Documentation**: Refer to the official documentation for the tools and frameworks you are using.

## Common Conceptual Misunderstandings

### 1. Confusion between Physical AI and Traditional AI

**Issue**: Students sometimes struggle to differentiate Physical AI (embodied, interactive with the physical world) from purely software-based AI (e.g., image recognition, chatbots).

**Solution**:
-   Revisit the "Concept Explanation for Physical AI" chapter.
-   Focus on the "Key Characteristics" section: embodiment, perception, action, and interaction in the physical world.
-   Consider how a self-driving car (Physical AI) fundamentally differs from a recommendation engine (Traditional AI), even though both use AI.

### 2. Difficulty grasping Embodied Intelligence

**Issue**: The abstract nature of embodied intelligence, especially the idea of the body as a computational resource, can be challenging.

**Solution**:
-   Review the "Embodied Intelligence Theory" chapter.
-   Think about biological examples: how a fish's fin shape influences its swimming efficiency, or how human hands are adapted for tool use.
-   Consider the "Simple Robot Simulation" lab exercise. How does a robot's physical design simplify or complicate its task?

## Common Technical Setup Issues (Early Stage)

### 1. Environment Setup Problems

**Issue**: Problems with installing Node.js, npm, or Docusaurus.

**Solution**:
-   **Node.js/npm**: Verify Node.js is installed by running `node -v` and `npm -v`. If not, follow the official Node.js installation guide for your operating system.
-   **Docusaurus**: Ensure you are in the correct directory (the Docusaurus project root, e.g., `physical-ai-book/`) and run `npm install` to install dependencies, then `npm start` to run the development server.
-   **Path Issues**: Ensure `node` and `npm` are correctly added to your system's PATH environment variable.

### 2. Docusaurus Build Errors

**Issue**: The `npm run build` command fails.

**Solution**:
-   **Check `package.json`**: Ensure all dependencies are correctly listed and installed (`npm install`).
-   **Syntax Errors**: Review any recent changes to `.md` or `.mdx` files for syntax errors (e.g., unclosed tags, incorrect Markdown). Docusaurus will often provide specific file paths and line numbers.
-   **Configuration Errors**: Double-check `docusaurus.config.js` and `sidebars.js` for syntax errors or incorrect paths.

### 3. Sidebar Navigation Not Working as Expected

**Issue**: Pages appear in the wrong order, or certain pages are missing from the sidebar.

**Solution**:
-   **`sidebars.js`**: Thoroughly review `physical-ai-book/sidebars.js`. Ensure that:
    -   All document IDs (`id: '...'`) match the filenames (without extension) in the `docs/` directory.
    -   The `sidebar_position` metadata in your `.md` or `.mdx` files is correct and unique within its category.
    -   Category files (`_category_.json`) are correctly configured if you are using auto-generated categories.
    -   Ensure the `physical-ai-book/sidebars.js` is properly structured. It should look something like:
        ```javascript
        /**
         * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
         */
        const sidebars = {
          tutorialSidebar: [
            'intro', // Example: intro.md
            {
              type: 'category',
              label: 'Introduction',
              items: [
                'introduction/overview',
                'introduction/physical-ai-concept',
                'introduction/embodied-intelligence',
                'introduction/learning-outcomes',
                'introduction/why-humanoids',
                'introduction/assessment-lab',
                'introduction/troubleshooting',
              ],
            },
            // ... other categories
          ],
        };

        module.exports = sidebars;
        ```
        (Note: the `intro` here is just an example, it refers to `docs/intro.md`). The important part is that new files are added to the correct category in `sidebars.js`.

## Getting Help

-   **Course Forum/Chat**: Post your questions and error messages to the dedicated course communication channels.
-   **Peer Assistance**: Work with classmates to debug and solve problems together.
-   **Instructor/TA Support**: Reach out to the teaching staff during office hours or through designated support channels.
