import { Meal } from "../Booking/Meal";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class Passenger extends Person{
    choseMeal:Meal

    private frequentFlyerNumber:string
    constructor(frequentFlyerNumber:string,firstName: string, lastName: string, age: number,gender: Gender){
        super(firstName,lastName,age,gender);
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
    addMeal(meal:Meal){
        // TODO:
    }
}