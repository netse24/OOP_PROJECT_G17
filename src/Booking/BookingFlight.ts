import { Gate } from "../Airport/Gate";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";
import { BookingTrip } from "./BookingTrip";
import { Meal } from "./Meal"
export class BookingFlight {
    private passengers: Passenger[] = [];
    private boolingTrip:BookingTrip;
    private chooseMeal: Meal;
    private flight: Flight;
    private gate:Gate;

    setAMealFromBookingFlight(meal:Meal){
        this.chooseMeal = meal;
    }

    getAMealFromBookingFlight() {
        return this.chooseMeal;
    }

    getFlightFromBookingFlight() {
        return this.flight;
    }
    getAFlight() {
        return this.flight;
    }
    getGate(){
        return this.gate;
    }
    
}