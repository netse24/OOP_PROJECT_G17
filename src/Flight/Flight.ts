import { Gate } from "../Airport/Gate";
import { Route } from "../Airport/Route";
import { BookingFlight } from "../Booking/BookingFlight";
import { DateTime } from "../Calendar/DateTime";
import { Pilot } from "../Person/Pilot";
import { CoPilot } from "../Person/CoPilot";
import { Chef } from "../Person/Chef";
export class Flight {
    private bookingFlight: BookingFlight[] = [];
    private route: Route;
    private gates: Gate[] = [];
    private dateTime: DateTime;
    private pilot: Pilot;
    private co_pilot: CoPilot;
    private chef: Chef;
    constructor(private flightNumber: string) { }
}