"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentToCourse = (syudentInfo) => {
    return {
        course: 'next Level',
        ...syudentInfo
    };
};
const student1 = {
    id: 1,
    name: 'John',
    hasPen: true
};
const student2 = {
    id: 2,
    name: 'Jane',
    hasPen: false,
    hasCar: true,
};
const result7 = addStudentToCourse(student1);
const result8 = addStudentToCourse(student2);
console.log(result7);
console.log(result8);
//# sourceMappingURL=constraint.js.map