// task_2/main.ts

// 1. Create a DirectorInterface with 3 expected methods.

/**
 * @interface DirectorInterface
 * @description Defines the methods expected from a Director.
 */
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// 2. Create a TeacherInterface with 3 expected methods.
/**
 * @interface TeacherInterface
 * @description Defines the methods expected from a Teacher.
 */
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// 3. Crate a class Director that implements the DirectorInterface.

/**
 * @class Director
 * @implements {DirectorInterface}
 * @description Represents a Director with specific tasks.
 */
class Director implements DirectorInterface {
    /**
     * @method workFromHome
     * @returns {string} A message indicating the director is working from home.
     */
    workFromHome(): string {
        return 'Working from home';
    }

    /**
     * @method getCoffeeBreak
     * @returns {string} A message indicating the director is taking a coffee break.
     */
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    /**
     * @method workDirectorTasks
     * @returns {string} A message indicating the director is working on director tasks.
     */
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// 4. Create a class Teacher that implements the TeacherInterface.
/**
 * @class Teacher
 * @implements {TeacherInterface}
 * @description Represents a Teacher with specific tasks.
 */
class Teacher implements TeacherInterface {
    /**
     * @method workFromHome
     * @returns {string} A message indicating the teacher is working from home.
     */
    workFromHome(): string {
        return 'Cannot work from home';
    }

    /**
     * @method getCoffeeBreak
     * @returns {string} A message indicating the teacher is taking a coffee break.
     */
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    /**
     * @method workTeacherTasks
     * @returns {string} A message indicating the teacher is working on teacher tasks.
     */
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// 5. Create a function createEmployee that can either return a Director or a Teacher based on the input.

/**
 * @function createEmployee
 * @description Creates an employee based on the salary input.
 * If the salary is less than 500, it returns a Teacher instance; otherwise, it returns a Director instance.
 * @param {number | string} salary - The salary of the employee.
 * @returns {Director | Teacher} An instance of Director or Teacher based on the salary.
 */
function createEmployee(salary: number | string): Director | Teacher {
    const numericSalary = typeof salary === 'string' ? parseFloat(salary) : salary;

    // if (salary < 500)
    if (numericSalary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// 6. Create a function isDirector that checks if the employee is a Director.
/**
 * @function isDirector
 * @description Type predicate to check if the given employee is a Director instance.
 * @param {Director | Teacher} employee - The emplyee object to check.
 * @returns {employee is Director} True if the employee is a Director.
 */
function isDirector(employee: Director | Teacher): boolean {
    return employee instanceof Director;
}

// 7. executework.

/**
 * @function executeWork
 * @description Executes the work method based on the type of employee.
 * If the employee is a Director, it calls workDirectorTasks; if it's a Teacher, it calls workTeacherTasks.
 * @param {Director | Teacher} employee - The employee to execute work for.
 * @returns {string} The result of the work method.
 */
function executeWork(employee: Director | Teacher): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
}

// 8. String literal types
/**
 * @type { 'Math' | 'History' } Subjects
 * @description A string literal type that can be either 'Math' or 'History'.
 */
type Subjects = 'Math' | 'History';


/**
 * @function teachClass
 * @description Returns a string indicating the class being taught based on the input.
 * @param {Subjects} todayClass - The subject being taught today.
 * @returns {string} A message indicating the class being taught.
 */
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}
