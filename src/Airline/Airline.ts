import { Employee } from "../Person/Employee";
import { Booking } from "../Booking/Booking";
import { BookingTrip } from "../Booking/BookingTrip";
export class Airline {
    private emplyees: Employee[] = [];
    private bookings: Booking[] = [];
    constructor(private name: string) { }

    getAllSalary():number{
        let allSalary = 0;
        this.emplyees.forEach(salary => {
            allSalary +=salary.getSalary()
        });
        return allSalary;
    }
    getAllBookings():number{
        let allBookings = 0;
        this.bookings.forEach(booking => {
            allBookings += booking.getBookingTrip();
        });
        return allBookings;

    }
}