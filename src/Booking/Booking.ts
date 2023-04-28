import { Passenger } from "../Person/Passenger";
import { BookingTrip } from "./BookingTrip"
export class Booking {
    private passengers: Passenger[] = [];
    private bookingTrip: BookingTrip[] = [];
    constructor(private bookingReferenceNumber: string) {
        this.bookingReferenceNumber = bookingReferenceNumber;
    }
}