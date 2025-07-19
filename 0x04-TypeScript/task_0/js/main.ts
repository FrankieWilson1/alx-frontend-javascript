// task_0/main.ts

/**
 * @interface Student
 * @description Defines the structure of a student object.
 * @property {string} firstName - The first name of the student.
 * @property {string} lastName - The last name of the student.
 * @property {number} age - The age of the student.
 * @property {string} location - The location of the student.
 */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects based on the Student interface.
const student1: Student = {
    firstName: "Frankie",
    lastName: "Wilson",
    age: 26,
    location: "Abuja"
}

const student2: Student = {
    firstName: "Mary",
    lastName: "Joseph",
    age: 20,
    location: "Lagos"
}

// Create an array to hold the student objects, ensuring type safety.
const studentsList: Student[] = [student1, student2];

/**
 * @function displayStudents
 * @description Renders a table in the document body, displaying each student's first name and location.
 * @param {Student[]} students - An array of student objects to render.
 * @returns {void}
 */
function displayStudents(students: Student[]): void {
    // Create main table and tab body elements.
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Append tbody to table, and table to the document body.
    table.appendChild(tbody);
    document.body.appendChild(table);

    // Iterate over the students array and create a row for each student.
    for (const student of students) {
        const row = document.createElement('tr');

        const tdataName = document.createElement('td');
        tdataName.textContent = student.firstName;

        const tdataLocation = document.createElement('td');
        tdataLocation.textContent = student.location;

        row.appendChild(tdataName);
        row.appendChild(tdataLocation);

        tbody.appendChild(row);
    }
}
