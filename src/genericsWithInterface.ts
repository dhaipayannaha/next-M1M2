interface Developer <T, X= null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T;
    bike?: X
}

interface WithBrand {
    brand: string;
    model: string;
    releaseYear: number;
}

interface WithOutBrand {
    model: string;
    releaseYear: number;
}

interface WithBike {
    model: string;
    releaseYear: number;
    color: string;
}


const poorDeveloper : Developer<WithBrand, WithBike> = {
    name: "John",
    salary: 1000,
    device: {
        brand: "Samsung",
        model: "S21",
        releaseYear: 2021
    },
    smartWatch: {
        brand: "Samsung",
        model: "S21",
        releaseYear: 2021
    },
    bike:{
        model: "Ducxati",
        releaseYear: 2023,
        color:"Black"
    }
}

const richDeveloper : Developer<WithOutBrand> = {
    name: "John",
    salary: 1000,
    device: {
        brand: "Samsung",
        model: "S21",
        releaseYear: 2021
    },
    smartWatch: {
        model: "S21",
        releaseYear: 2021
    }
}