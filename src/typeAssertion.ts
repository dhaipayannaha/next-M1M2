
const kgToGmConverter  = (input: string| number) : string | number | undefined => {
    if (typeof input === "number"){
        return input * 1000
    } else if (typeof input === "string"){
        const [value] = input.split(' ');
        return `CovertedOutPut is ${Number(value) * 1000}`
    }
}

const result1 = kgToGmConverter(10) as Number;
const result2 = kgToGmConverter("10 kg") as String;

console.log(result1);
console.log(result2);