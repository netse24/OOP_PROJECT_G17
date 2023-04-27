import { Person } from "./Person";

export class Employee extends Person{
    private salary: number
    constructor(salary: number,firstName: string,lastName: string,age: number){
        super(firstName,lastName,age)
        this.salary = salary
    }
}