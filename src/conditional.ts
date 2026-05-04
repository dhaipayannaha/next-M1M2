type A = null;
type B = undefined;
type C = A extends number ? true : B extends undefined ? false : "hello";



type RichPeopleVehicle = {
    bike: string;
    car: string;
    cng: string;
}

type CheckVehicle<T> = T extends RichPeopleVehicle ? "Rich" : "Poor";


type HasBike = CheckVehicle<"bike">