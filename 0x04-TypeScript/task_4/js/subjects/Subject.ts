// subjects/Subject.ts

namespace Subjects {
    export class Subject {
        teacher: Teacher;   // Refferes to Subjects.Teacher due to the shared namespace

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
