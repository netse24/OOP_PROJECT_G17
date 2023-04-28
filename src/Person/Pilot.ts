import { DateTime } from "../Calendar/DateTime";
import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { Gender } from "./Gender";

export class Pilot extends Employee{
    private flights:Flight[]=[];
    private dates:DateTime[]=[];
    constructor(salary: number,firstName: string,lastName: string,age: number,gender:Gender){
        super(salary,firstName,lastName,age,gender);
    }
    addFlight(flight:Flight){
        this.flights.push(flight)
    }
    addDateFlight(date:DateTime){
        this.dates.push(date)

    }
}