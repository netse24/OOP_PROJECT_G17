import { Gate } from "../Airport/Gate";
import { Route } from "../Airport/Route";
import { BookingFlight } from "../Booking/BookingFlight";
import { DateTime } from "../Calendar/DateTime";
import { Pilot } from "../Person/Pilot";
import { CoPilot } from "../Person/CoPilot";
import { Chef } from "../Person/Chef";
import { Meal } from "../Booking/Meal";
export class Flight {
    private bookingFlight: BookingFlight[] = [];
    private route: Route;
    private gates: Gate[] = [];
    private dateTime: DateTime;
    private pilot: Pilot;
    private co_pilot: CoPilot;
    private chef: Chef;
    private meals: Meal[] = [];
    constructor(private flightNumber: string) {
        this.flightNumber = flightNumber;
    }

    getMeals(): Meal[] {
        return this.meals;
    }
    getGates(): Gate[] {
        return this.gates;
    }

    addGate(gate: Gate) {
        this.gates.push(gate);
    }


    addBookingFlight(bookingFlight: BookingFlight) {
        this.bookingFlight.push(bookingFlight);
    }

    addMealFromBookingFlight() {
        this.bookingFlight.forEach((findMeal) => {
            findMeal.getMealsFromBookingFlight().forEach((meal) => {
                this.meals.push(meal);
            })
        })
    }
    addDate(date: DateTime) {
        this.dateTime = date
    }

}