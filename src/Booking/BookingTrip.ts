import { BookingFlight } from "./BookingFlight";
import { Bag } from "./Bag";
import { Passenger } from "../Person/Passenger";
export enum ReturnTicket{

}
export class BookingTrip {
    private passengers: Passenger[] = [];
    
    private bags: Bag[] = [];
    private bookingFlight: BookingFlight[] = [];

}
