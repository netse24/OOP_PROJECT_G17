import { Employee } from "./Employee";

export class Pilot extends Employee{
    constructor(salary: number,firstName: string,lastName: string,age: number){
        super(salary,firstName,lastName,age);
    }
}