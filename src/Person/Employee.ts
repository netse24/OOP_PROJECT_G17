import { Gender } from "./Gender";
import { Person } from "./Person";

export class Employee extends Person{
    private salary: number
    constructor(salary: number,firstName: string,lastName: string,age: number,gender:Gender){
        super(firstName,lastName,age,gender)
        this.salary = salary
    }
    getSalary(){
        return this.salary
    }
  
}