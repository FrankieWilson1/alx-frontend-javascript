# TypeScript Learning Journey: From Basics to Advanced Concepts

This repository documents a series of tasks designed to deepen understanding of TypeScript, covering fundamental concepts to more advanced patterns like Namespaces, Declaration Merging, and Nominal Typing (Branding). Each task is self-contained within its own directory, including its specific configuration files.

## Key TypeScript Concepts Demonstrated

Across these tasks, the following TypeScript concepts and best practices are explored:

* **Basic Types & Type Annotations:** `number`, `string`, `boolean`, `void`, `any`, etc.
* **Interfaces:** Defining shapes of objects, extending interfaces.
* **Classes & Inheritance:** Creating classes, constructors, methods, and using the `extends` keyword.
* **Type Aliases:** Creating custom names for types.
* **Namespaces (`namespace` keyword):** Organizing code, preventing global conflicts, and modularity.
* **Declaration Merging:** Extending existing interfaces or namespaces across multiple files.
* **Nominal Typing (Branding):** Simulating distinct types for objects with identical structures using unique properties (e.g., `readonly _brand`).
* **`tsconfig.json` Configuration:**
    * `target`, `module`, `outDir`, `outFile`, `sourceMap`, `noImplicitAny`.
    * `include` for specifying files to compile.
    * `moduleResolution`.
* **Compiler Directives (`/// <reference path="..." />`):** For informing the TypeScript compiler about dependencies, especially when using `outFile` with namespaces.
* **Module Systems:** Understanding the difference between CommonJS, ES Modules, and `module: "none"` output.

## Setup and Installation

To run these tasks, you'll need Node.js and npm (Node Package Manager) installed.

1.  **Clone the repository (if applicable):**
    ```bash
    git clone https://github.com/FrankieWilson1/frontend-javascript.git
    cd <repository-directory>
    ```
2.  **Navigate to a specific task directory:**
    For instance, to work on `task_4`:
    ```bash
    cd task_4
    ```
3.  **Install Node.js dependencies:**
    Each task directory has its own `package.json`. Make sure to run `npm install` within the directory of the task you are working on to install its specific dependencies (like `typescript`, `ts-node`, `webpack`).
    ```bash
    npm install
    ```

## How to Run Each Task

Each task's primary execution method involves compiling TypeScript to JavaScript and then running the JavaScript with Node.js.

### General Compilation & Execution Flow:

1.  **Navigate to the Task Directory:** `cd task_X`
2.  **Install Dependencies:** `npm install` (if not already done)
3.  **Compile TypeScript:**
    ```bash
    npx tsc -p .
    ```
    This command tells `tsc` to use the `tsconfig.json` in the current directory (`.`) to compile your `.ts` files.
4.  **Run Compiled JavaScript:**
    The exact command will depend on the `outDir` or `outFile` configuration in that task's `tsconfig.json`. Commonly:
    ```bash
    node dist/<your-main-file>.js
    ```

---

### Specific Instructions for Complex Tasks:

#### Task 4: Namespaces, Declaration Merging, and Bundling

This task demonstrates how to structure a large application using TypeScript namespaces across multiple files and then bundle them into a single output file.

* **Key Files:** `task_4/js/subjects/*.ts`, `task_4/js/main.ts`, ``task_4/tsconfig.json`
* **`task_4/tsconfig.json` Configuration:**
    To successfully bundle all `Subjects` namespaces and `main.ts` into a single file, the `tsconfig.json` is configured as follows:
    ```json
    {
      "compilerOptions": {
        "outFile": "./dist/main.js", // Output all compiled JS into this single file
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "none",        // Crucial for global script output with outFile and namespaces
        "target": "es5",
        "allowJs": true,
        "moduleResolution": "node",
        "skipLibCheck": true
      },
      "include": [
        "main.ts"                  // Include main entry point
      ]
    }
    ```
    *(Note: The order in the `include` array is important for `outFile` to prevent "Class used before declaration" errors. While `main.ts`'s `/// <reference>` directives can implicitly guide ordering for other files if only `main.ts` is in `include`, explicit listing ensures robustness.)*
* **`main.ts` Adjustments:** Ensure that the top-level `const` declarations in `task_4/js/main.ts` (e.g., `cpp`, `react`, `java`, `cTeacher`) **do NOT** have the `export` keyword, as they are part of a global bundle, not ES Modules.
* **To Run Task 4:**
    1.  Navigate to `task_4/`: `cd task_4`
    2.  Compile: `npx tsc -p .`
    3.  Execute: `node dist/main.js`

* **Expected Output (Task 4):**
    ```
    C++ Subject:
    Here is the list of requirements for Cpp
    Available Teacher: John

    React Subject:
    Here is the list of requirements for React
    No available teacher

    Java Subject:
    Here is the list of requirements for Java
    No available teacher
    ```

#### Task 5: Brand Convention & Nominal Typing

This task demonstrates how to simulate nominal typing in TypeScript using a `_brand` property to distinguish between structurally identical interfaces.

* **Key File:** `task_5/js/main.ts`.
* **`task_5/tsconfig.json` Configuration (Example - adjust as needed):**
    ```json
    {
      "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs", // A safe default for Node.js execution
        "target": "es2018",   // Modern JavaScript target
        "strict": true,       // Enable all strict type-checking options
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
      },
      "include": [
        "js/main.ts" // Only main.ts is typically needed for this task
      ]
    }
    ```
* **`task_5/js/main.ts` Example (Simplified for README, add your actual implementation):**
    ```typescript
    interface MajorCredits {
        credits: number;
        readonly _brand: 'major';
    }

    interface MinorCredits {
        credits: number;
        readonly _brand: 'minor';
    }

    function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
        return { credits: subject1.credits + subject2.credits, _brand: 'major' };
    }

    function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
        return { credits: subject1.credits + subject2.credits, _brand: 'minor' };
    }

    // Example Usage (add these lines to main.ts for testing)
    // const major1: MajorCredits = { credits: 3, _brand: 'major' };
    // const major2: MajorCredits = { credits: 4, _brand: 'major' };
    // const totalMajor = sumMajorCredits(major1, major2);
    // console.log("Total Major Credits:", totalMajor.credits);

    // const minor1: MinorCredits = { credits: 1, _brand: 'minor' };
    // const minor2: MinorCredits = { credits: 2, _brand: 'minor' };
    // const totalMinor = sumMinorCredits(minor1, minor2);
    // console.log("Total Minor Credits:", totalMinor.credits);
    ```
* **To Run Task 5:**
    1.  Navigate to `task_5/`: `cd task_5`
    2.  Compile: `npx tsc -p .`
    3.  Execute: `node dist/js/main.js` (assuming `outDir: "./dist/"` and source is in `js/`)

---

## Author

[Frankiewilson](github.com/frankwilliams1)

## License
