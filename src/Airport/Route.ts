import { Flight } from "../Flight/Flight";

export class Route{
    private flight:Flight;
    constructor(private departure:string, private arrival:string){}
}