import { BookingTrip } from "./BookingTrip"
export class Booking {
    private bookingTrip: BookingTrip[] = [];
    constructor(private bookingReferenceNumber: string) {
        this.bookingReferenceNumber = bookingReferenceNumber;
    }
}