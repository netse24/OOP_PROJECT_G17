import { Gate } from "../Airport/Gate";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";
import { BookingTrip } from "./BookingTrip";
import { Meal } from "./Meal"
export class BookingFlight {
    private passengers: Passenger[] = [];
    private boolingTrip: BookingTrip;
    private chooseMeal: Meal[] = [];
    private flight: Flight;
    private gate: Gate;

    setAMealFromBookingFlight(meal: Meal) {
        this.chooseMeal.push(meal);
    }

    getMealsFromBookingFlight(): Meal[] {
        return this.chooseMeal;
    }

    getFlightFromBookingFlight() {
        return this.flight;
    }
    getAFlight(): Flight {
        return this.flight;
    }

    setFlight(flight: Flight) {
        this.flight = flight;
    }

    setAGateInBookingFlight(gate: Gate) {
        this.gate = gate
    }

    getGate() {
        return this.gate;
    }

}