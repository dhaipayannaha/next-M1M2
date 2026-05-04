type RichPeoplesVehicle = {
    car:string,
    bike:string,
    cng:string
}

type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: myVehicle2 = "bike";



type User = {
    id: number,
    name:string,
    address: {
        city:string,
        postCode: number
    }
}

const user: User = {
    id: 222,
    name:"shafiq",
    address: {
        city:"mymensingh",
        postCode: 1233
    }
}


const muId = user["id"]
const myName = user["name"]
const myAddress = user["address"]

// console.log(muId, myName, myAddress)



const getPropertyFromObj = <T> (obj: T, key: keyof T) =>{
   return obj[key] 
}


const result = getPropertyFromObj(user, "address")
console.log(result)

const product = {
    brand:"apple"
}


const result1 = getPropertyFromObj(product, "brand")
console.log(result1)
