import { BookingFlight } from "../Booking/BookingFlight";
import { Meal } from "../Booking/Meal";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class Passenger extends Person {
    private chooseMeal: Meal;
    private bookingFlights: BookingFlight[] = [];
    private frequentFlyerNumber: string
    constructor(frequentFlyerNumber: string, firstName: string, lastName: string, age: number, gender: Gender,chooseMeal: Meal) {
        super(firstName, lastName, age, gender);
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
    addMeal(meal: Meal) {
        // TODO:
    }



}