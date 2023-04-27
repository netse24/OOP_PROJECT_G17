import { Gate } from "./Gate";
import { Route } from "./Route";
import { Address } from "./Address";
export class Airport {
    private gates: Gate[] = [];
    private routes: Route[] = [];
    private address:Address;
    constructor(private name: string) { }
}