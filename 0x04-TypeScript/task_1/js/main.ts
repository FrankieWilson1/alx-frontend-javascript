// task_1/main.ts

// 1. Building a Teacher interface.

/**
 * @interface Teacher
 * @description Defines the structure of a Teacher object.
 * @property {string} firstName - The first name of the teacher.
 * @property {string} lastName - The last name of the teacher.
 * @property {boolean} fullTimeEmployee - Indicates if the teacher is a full-time employee.
 * @property {number} [yearsOfExperience] - The number of years of experience the teacher has (optional).
 * @property {string} location - The location of the teacher.
 * @property {any} [key: string] - Allows for additional properties of any type
 */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows for additional properties
}

// 2. Extending the Teacher interface to create a Director interface.

/**
 * @interface Director
 * @description Extends the Teacher interface to include additional properties specific to a Director.
 * @extends {Teacher}
 * @property {number} numberOfReports - The number of reports the director has.
 */
interface Director extends Teacher {
    numberOfReports: number;
}

// Printing the Teachers

/**
 * @interface printTeacher
 * @description Defines the type signature for a function that prints a teacher's formatted name.
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} A formatted string containing the teacher's first initial and last name.
 */
interface printTeacher {
    (firstName: string, lastName: string): string;
}

/**
 * @function printTeacher
 * @description Formats a teacher's name as the firs initial of the first name followed by the last name.
 * followed by a period and the last name.
 * @param firstName - The first name of the teacher.
 * @param lastName - last name of the teacher.
 * @returns 
 */
function printTeacher(firstName:string, lastName:string): string {
    return `${firstName[0]}. ${lastName}`;
}

// 4. Writing a class

/**
 * @interface IStudentClass
 * @description Defines the shape of an instance of StudentClass.
 * @property {string} firstName - The first name of the student.
 * @property {string} lastName - The last name of the student.
 * @method {string} workOnHomework - A method that returns a string indicating the student is working on homework.
 * @method {string} displayName - A method that returns the student's first name.
 */
interface IStudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

/**
 * @interface IStudentClassConstructor
 * @description Defines the shape of the constructor for StudentClass.
 * It descirbes a 'new-able' function that creates IStudentClass instances.
 * @param {string} firstName - The first name of the student.
 * @param {string} lastName - The last name of the student. 
 * @returns {IStudentClass} An instance of IStudentClass.
 */
interface IStudentClassConstructor {
    new(firstName: string, lastName: string): IStudentClass;
}

/**
 * @class StudentClass
 * @implements {IStudentClass}
 * @description Represents a student with methods for homework and displaying their name.
 */
class StudentClass {
    firstName: string;
    lastName: string;

    /**
     * @constructor
     * @param {string} firstName - The first name of the student.
     * @param {string} lastName - The last name of the student.
     */
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to indicate work on homework
    workOnHomework(): string {
        return 'Currently working';
    }

    // Method to display the student's first name
    displayName(): string {
        return this.firstName;
    }
}
