import { Gender } from "./Gender";
export abstract class Person {
    private firstName: string
    private lastName: string
    private age: number
    constructor(firstName: string, lastName: string, age: number, private gender: Gender) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
    }
}