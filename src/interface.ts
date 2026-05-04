interface User {
    name: string;
    email: string;
    phone: string;
}


interface Role {
    role: 'admin' | 'user' | 'superAdmin';
    
}

type UserWithRole = User & Role;

interface iUserWithRole extends User, Role {};


const user: iUserWithRole = {
    name: "Mezba",
    email: "[EMAIL_ADDRESS]",
    role: 'admin',
    phone: "01886311616"
}



interface Friends {
    [index: number]: string;
}

const friends: Friends = ["A", "B", "C", "D"];
console.log(friends);


interface add {
    (num1: number, num2: number) : number
}

const addNumber: add = (num1, num2) => {
    return num1 + num2;
}