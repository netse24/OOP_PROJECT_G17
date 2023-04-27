import { Person } from "./Person";

export class Passenger extends Person{
    constructor(private frequentFlyerNumber:string,firstName:string,lastName:string,age:number){
        super(firstName,lastName,age);
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
}