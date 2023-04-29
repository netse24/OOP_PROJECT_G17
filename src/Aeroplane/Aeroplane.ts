import { Seat } from "./Seat";
import { Flight } from "../Flight/Flight";

export class Aeroplane {
    private seats: Seat[] = [];
    private flights: Flight[] = [];
    constructor(private registrationNumber: string) { }
    addSeat(seat: Seat){
        this.seats.push(seat);
    }
    getSeat(){
        return this.seats
    }
}