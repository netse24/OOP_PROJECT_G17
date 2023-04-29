import { BookingFlight } from "./BookingFlight";
import { Bag } from "./Bag";
import { Passenger } from "../Person/Passenger";

export enum ReturnTicket {
    return = "reTurnTrip"
}
export class BookingTrip {
    private passengers: Passenger[] = [];
    private bags: Bag[] = [];
    private bookingFlight: BookingFlight[] = [];
    private returnTicket: ReturnTicket[] = [];



    setReturnTicket(returnTicket: ReturnTicket) {
        this.returnTicket?.push(returnTicket);
    }

    getAllReturnTicket(): number {
        let numberOfReturnTicket: number = 0;
        this.returnTicket.forEach((returnTiket) => {
            if (returnTiket) {
                numberOfReturnTicket += 1;
            }
        })
        return numberOfReturnTicket;
    }

    addPassengerBag(bag: Bag) {
        this.bags.push(bag);
    }



}
