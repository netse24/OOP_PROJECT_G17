export class DateTime {
    private Date: string
    private Time: string
    constructor(Date: string, Time: string) {
        this.Date = Date
        this.Time = Time
    }
    isDateEqual(dateTime: DateTime): boolean {
        return this.Date === dateTime.Date
            && this.Time === dateTime.Time;
    }
}