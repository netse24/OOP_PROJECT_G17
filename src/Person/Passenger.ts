import { Gate } from "../Airport/Gate";
import { Bag } from "../Booking/Bag";
import { Booking } from "../Booking/Booking";
import { BookingFlight } from "../Booking/BookingFlight";
import { Meal } from "../Booking/Meal";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class Passenger extends Person {
    private bages: Bag[] = [];
    private booking: Booking;
   
    private bookingFlights: BookingFlight[] = [];


    constructor(firstName: string, lastName: string, age: number, gender: Gender, private chooseMeal?: Meal, private frequentFlyerNumber?: string,) {
        super(firstName, lastName, age, gender);
        this.chooseMeal = chooseMeal;
        this.frequentFlyerNumber = frequentFlyerNumber;
    }

    getGateOfPassenger(): Gate | undefined {
        let showgate: Gate | undefined = undefined
        this.bookingFlights.forEach(flight => {
            flight.getAFlight().getGates().forEach(gate => {
                if (flight.getGate() === gate) {
                    showgate = gate
                }
            })
        })
        return showgate;
    }

    getReferenceNumberInPasserenger():string {
        return  this.booking.getReferenceNumberInBooking()
    }
}