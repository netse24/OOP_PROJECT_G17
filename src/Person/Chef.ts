import { Meal } from "../Booking/Meal";
import { Employee } from "./Employee";

export class Chef extends Employee{
    private createMeal:Meal[] = [];
    constructor(salary: number,firstName: string,lastName: string,age: number){
        super(salary,firstName,lastName,age);
    }
}