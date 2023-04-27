import { Employee } from "./Employee";

export class CoPilot extends Employee{
    constructor(salary: number,firstName: string,lastName: string,age: number){
        super(salary,firstName,lastName,age);
    }
}