import { Gate } from "./Gate";
import { Route } from "./Route";
import { Address } from "./Address";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passenger";
import { Gender } from "../Person/Gender";
import { DateTime } from "../Calendar/DateTime";
export class Airport {
    private gates: Gate[] = [];
    private routes: Route[] = [];
    private flights:Flight[] = [];
    private passengers:Passenger[] = [];
    private address:Address;
    constructor(private name: string) { }

    addPassenger(passenger: Passenger) {
        this.passengers.push(passenger)
    }

    

    addFlight(flight:Flight,date:DateTime){
        this.flights.push(flight)
        this.flights.forEach(addDate=>{
            addDate.addDate(date);
        })
    }
    
    addRoutes(route:Route){
        this.routes.push(route);
    }

    setAddress(address:Address){
        this.address = address
    }
}