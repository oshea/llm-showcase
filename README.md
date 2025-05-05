# LLM Capability Showcase

A simple static web page to display and compare different Large Language Model (LLM) capabilities based on various benchmarks and features.

## Project Structure

-   `public/`: Contains all the static assets served.
    -   `index.html`: The main HTML file containing the structure and layout. Uses Alpine.js for interactivity.
    -   `capabilities.json`: The data source listing all the LLM capabilities, descriptions, supported models, benchmarks, ratings, etc.
    -   `input.css`: The source Tailwind CSS file.
    -   `style.css`: The compiled Tailwind CSS output (generated).
    -   `assets/`: Contains image assets (like the Turing head icon).
-   `tailwind.config.js`: Configuration file for Tailwind CSS.
-   `package.json`: Defines project dependencies and scripts.

## Prerequisites

-   [Node.js](https://nodejs.org/) (which includes npm)

## Setup and Running

1.  **Clone the repository:**
    ```bash
    git clone <https://github.com/GawainTheCoder/llm-showcase>
    cd llm-showcase
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the CSS:**
    This command compiles the Tailwind CSS from `public/input.css` into `public/style.css`.
    ```bash
    npm run build:css
    ```
    *(Alternatively, for development, you can run `npm run watch:css` in a separate terminal to automatically rebuild the CSS on changes.)*

4.  **Start the local server:**
    This command serves the `public` directory on a local port (usually `http://localhost:3000`).
    ```bash
    npm start
    ```
    or
    ```bash
    npx serve public
    ```

    Now you can open your browser and navigate to the provided local URL to see the showcase.

## Making Edits

-   **To modify LLM capabilities data:**
    Edit the `public/capabilities.json` file. Add, remove, or modify the JSON objects representing each capability.

-   **To modify the UI, layout, or interactive elements:**
    Edit the `public/index.html` file. This file contains:
    -   The HTML structure.
    -   Tailwind CSS classes for styling.
    -   Alpine.js directives (`x-data`, `x-for`, `x-show`, `@click`, etc.) for dynamic behavior, including the rating legend modal logic (found within the `<script>` tag near the end).