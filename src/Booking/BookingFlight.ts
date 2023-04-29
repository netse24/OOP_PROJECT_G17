import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";
import { Meal } from "./Meal"
export class BookingFlight {
    private passengers: Passenger[] = [];
    private chooseMeal: Meal;
    private flight :Flight;
    
    getAMealFromBookingFlight(){
        return this.chooseMeal;
    }

    getFlightFromBookingFlight(){
        return this.flight;
    }

}