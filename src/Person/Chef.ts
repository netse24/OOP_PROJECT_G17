import { Meal } from "../Booking/Meal";
import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { Gender } from "./Gender";

export class Chef extends Employee {
    private fights: Flight[] = [];
    constructor(salary: number, firstName: string, lastName: string, age: number, gender: Gender) {
        super(salary, firstName, lastName, age, gender);
    }

    getMeals(fight:Flight): Meal[] {
        let allMeals: Meal[] = [];
        this.fights.forEach((meals) => {
            allMeals = meals.getMeals();
        })
        return allMeals;
    }
}