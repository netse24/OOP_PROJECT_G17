import { Employee } from "../Person/Employee";
import { Booking } from "../Booking/Booking";
export class Airline {
    private emplyees: Employee[] = [];
    private bookings: Booking[] = [];
    constructor(private name: string) { }

    getAllSalary():number{
        let allSalary = 0;
        this.emplyees.forEach(salary => {
            allSalary +=salary.getSalary()
        });
        return allSalary;
    }
}