"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kgToGmConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(' ');
        return `CovertedOutPut is ${Number(value) * 1000}`;
    }
};
const result1 = kgToGmConverter(10);
const result2 = kgToGmConverter("10 kg");
console.log(result1);
console.log(result2);
//# sourceMappingURL=typeAssertion.js.map