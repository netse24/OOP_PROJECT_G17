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
    private flight:Flight;
    private passengers:Passenger[] = [];
    private address:Address;
    constructor(private name: string) { }

    addPassenger(passenger: Passenger) {
        this.passengers.push(passenger)
    }

    getDetailPassenger(firstName:string,lastName:string,age:number,gender:Gender):Passenger|undefined{
       // TODO
       return undefined
    }

    addFlight(flight:Flight,date:DateTime){
        // TODO:
    }
    
    addRoutes(route:Route){
        this.routes.push(route);
    }

    addAddress(address:Address){
        // TODO:
    }
}