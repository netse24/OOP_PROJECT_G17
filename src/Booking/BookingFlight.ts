import { Passenger } from "../Person/Passenger";
import { Meal } from "./Meal"
export class BookingFlight {
    private passengers: Passenger[] = [];
    private chooseMeal: Meal;
    
    getAMealFromBookingFlight(){
        return this.chooseMeal;
    }
}