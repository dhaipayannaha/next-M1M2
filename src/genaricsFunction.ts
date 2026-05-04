const createArrayWithObject = (value: {id: number, name: string}) => {
    return [value]
}

console.log(createArrayWithObject({id: 1, name: "John"}))


const createArraywithGenarics = <T>(value:T) => {
    return [value]
}

console.log(createArraywithGenarics('apple'))
console.log(createArraywithGenarics([1,2,3,4,5,6,7,8,9,10]))
console.log(createArraywithGenarics({id: 1, name: "John"}))



const createArrayWithTuple = <T, X>(value1:T, value2:X) => {
    return [value1, value2]
}

// console.log(createArrayWithTuple('apple', 1))
// console.log(createArrayWithTuple([1,2,3,4,5,6,7,8,9,10], 'apple'))
// console.log(createArrayWithTuple({id: 1, name: "John"}, {name: 'John'}))


//tuple must be two value.
const creatArrayWithTuple = <T, U>(value1: T, value2: U): [T, U] => {
    return [value1, value2]
}


const result5 = creatArrayWithTuple(1, 'apple')
const result6 = creatArrayWithTuple(true, 123);




const addStudentToCourse = <T>(syudentInfo: T) =>{
    return{
        course: 'next Level',
        ...syudentInfo
    }
}


const student1 ={
    id: 1,
    name: 'John',
    hasPen:true
}

const student2 ={
    id: 2,
    name: 'Jane',
    hasPen:false,
    hasCar: true,
}


const result7 = addStudentToCourse(student1)
const result8 = addStudentToCourse(student2)

console.log(result7);
console.log(result8);