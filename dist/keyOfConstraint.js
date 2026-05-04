"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "bike";
const user = {
    id: 222,
    name: "shafiq",
    address: {
        city: "mymensingh",
        postCode: 1233
    }
};
const muId = user["id"];
const myName = user["name"];
const myAddress = user["address"];
// console.log(muId, myName, myAddress)
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result = getPropertyFromObj(user, "address");
console.log(result);
//# sourceMappingURL=keyOfConstraint.js.map