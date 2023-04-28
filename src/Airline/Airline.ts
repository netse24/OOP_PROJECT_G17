import { Employee } from "../Person/Employee";
import { Booking } from "../Booking/Booking";
export class Airline {
    private emplyees: Employee[] = [];
    private bookings: Booking[] = [];
    constructor(private name: string) { }
}