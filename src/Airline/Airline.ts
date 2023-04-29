import { Employee } from "../Person/Employee";
import { Booking } from "../Booking/Booking";
import { BookingTrip } from "../Booking/BookingTrip";
import { Passenger } from "../Person/Passenger";
export class Airline {
    private emplyees: Employee[] = [];
    private bookings: Booking[] = [];
    constructor(private name: string) { }

    getAllSalary(): number {
        let allSalary = 0;
        this.emplyees.forEach(salary => {
            allSalary += salary.getSalary()
        });
        return allSalary;
    }

    getAllBookings(): number {
        let allBookings = 0;
        this.bookings.forEach(booking => {
            allBookings += booking.getBookingTrip();
        });
        return allBookings;
    }

    getPassengerBookingTicketReturn(): number {
        let passengersReturnTicket: number = 0;
        this.bookings.forEach((bookingTrip) => {
            bookingTrip.getAllBookingTrips().forEach((returnTicket) => {
                passengersReturnTicket = returnTicket.getAllReturnTicket();
            })
        })
        return passengersReturnTicket;
    }

    getDetailPassenger(referenceNumberofTrip: string): Passenger | undefined {
        let Apassenger: Passenger | undefined;
        this.bookings.forEach((booking) => {
            booking.getPassengers().forEach((passenger) => {
                if (passenger.getReferenceNumberInPasserenger() === booking.getReferenceNumberInBooking() && booking.isPassengerRegferenceNumberEqual(referenceNumberofTrip)) {
                    Apassenger = passenger;
                }
            })
        })
        return Apassenger;
    }
}