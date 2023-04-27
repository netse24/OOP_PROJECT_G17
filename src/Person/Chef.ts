import { Employee } from "./Employee";

export class Chef extends Employee{
    constructor(salary: number,firstName: string,lastName: string,age: number){
        super(salary,firstName,lastName,age);
    }
}