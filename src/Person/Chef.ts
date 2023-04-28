import { Meal } from "../Booking/Meal";
import { Employee } from "./Employee";
import { Gender } from "./Gender";

export class Chef extends Employee{
    private createMeal:Meal[] = [];
    constructor(salary: number,firstName: string,lastName: string,age: number,gender: Gender){
        super(salary,firstName,lastName,age,gender);
    }
}