export class Gate {
    constructor(private gateNumber: string) { }
    
    isGateEqual(newGeteNumber: string): boolean {
        return this.gateNumber === newGeteNumber;
    }
}