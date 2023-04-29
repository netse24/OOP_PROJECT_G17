import { Meal } from "../Booking/Meal";
import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { Gender } from "./Gender";

export class Chef extends Employee {
    private fights: Flight[] = [];
    constructor(salary: number, firstName: string, lastName: string, age: number, gender: Gender) {
        super(salary, firstName, lastName, age, gender);
    }

    addFight(fight: Flight) {
        this.fights.push(fight);
    }

    getMeals() {
        let allMeals:Meal[] = [];
        this.fights.forEach((meals) => {
            meals.getMeals().forEach((meal) => {
                allMeals.push(meal);
            });
        })
        return allMeals;
    }
}