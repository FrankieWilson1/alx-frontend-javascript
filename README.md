# 0x04. TypeScript Learning Project

This repository serves as a comprehensive learning journey through various concepts and features of TypeScript. It's structured as a series of progressively challenging tasks, each designed to provide hands-on experience with TypeScript's powerful type system, object-oriented capabilities, and compiler configurations.

## Project Goal

The primary objective of this project is to build a solid foundation in TypeScript, covering everything from basic type annotations to advanced module patterns and design considerations. By working through these tasks, the aim is to gain practical skills in writing robust, scalable, and type-safe JavaScript applications with TypeScript.

## Project Structure

The project is divided into distinct task directories, named `task_0/` through `task_5/`. Each `task_X` directory is an independent module, containing:

* Its own specific `package.json` for managing dependencies.
* A `tsconfig.json` file tailored to that task's compilation requirements.
* A `webpack.config.js` (if Webpack integration is part of the task setup).
* All relevant TypeScript source code (`.ts` files).
* **Crucially, each `task_X` directory contains its own `README.md` file with detailed instructions, specific code explanations, and execution steps relevant to that particular task.**

## Key Learnings Covered

Throughout this project, you will explore and apply:

* **TypeScript Fundamentals:** Basic types, variables, functions, and interfaces.
* **Object-Oriented Programming (OOP) in TypeScript:** Classes, inheritance, abstract classes, and advanced interface usage.
* **Code Organization & Modularity:** Utilizing Namespaces, ES Modules, and understanding their interplay.
* **Advanced Type System Concepts:** Type aliases, declaration merging, and simulating nominal typing (branding).
* **TypeScript Compiler (`tsc`) Configuration:** Mastering `tsconfig.json` for different build outputs and scenarios (e.g., `outFile`, `module` options, `include` paths).
* **Debugging TypeScript Projects:** Strategies for identifying and resolving common compilation and runtime errors.

## Getting Started

To get started with this project, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your system.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/FrankieWilson1/frontend-javascript.git
    cd 0x04-TypeScript
    ```
2.  **Navigate to a specific task:**
    Each task is self-contained. To explore or run a task, navigate into its respective directory:
    ```bash
    cd task_0 # or task_1, task_2, etc.
    ```
3.  **Install task-specific dependencies:**
    Inside each task directory, run `npm install` to set up its unique development dependencies (like `typescript`, `ts-node`, `webpack`).
    ```bash
    npm install
    ```

## How to Run Tasks

For detailed instructions on how to compile and run the code for each specific task, please refer to the `README.md` file located within each `task_X` directory. These individual `README`s provide precise commands and expected outputs.
