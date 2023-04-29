import { Gate } from "../Airport/Gate";
import { BookingFlight } from "../Booking/BookingFlight";
import { Meal } from "../Booking/Meal";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class Passenger extends Person {
    private chooseMeal?: Meal;
    private bookingFlights: BookingFlight[] = [];
    private frequentFlyerNumber: string
    constructor(frequentFlyerNumber: string, firstName: string, lastName: string, age: number, gender: Gender,chooseMeal: Meal) {
        super(firstName, lastName, age, gender);
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
    
    getGateOfPassenger():Gate|undefined{
        let showgate:Gate|undefined = undefined
        this.bookingFlights.forEach(flight=>{
            flight.getAFlight().getGates().forEach(gate=>{
                if(flight.getGate() === gate){
                    showgate = gate
                }
            })
        })
        return showgate;
    }
}