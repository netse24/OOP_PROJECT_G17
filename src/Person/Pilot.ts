import { Employee } from "./Employee";
import { Gender } from "./Gender";

export class Pilot extends Employee{
    constructor(salary: number,firstName: string,lastName: string,age: number,gender:Gender){
        super(salary,firstName,lastName,age,gender);
    }
}