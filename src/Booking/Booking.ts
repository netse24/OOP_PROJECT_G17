import { Passenger } from "../Person/Passenger";
import { BookingTrip } from "./BookingTrip"
export class Booking {
    private bookingTrips: BookingTrip[] = [];
    constructor(private bookingReferenceNumber: string, private bookingId: string) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.bookingId = bookingId;
    }

    getBookingTrip(): number {
        let numberOfBookingTrip: number = 0;
        this.bookingTrips.forEach(trip => {
            if (trip) {
                numberOfBookingTrip += 1;
            }
        })
        return numberOfBookingTrip;

    }
}