export class EventGroup {
    public constructor(date: Date,
        quantity:number,
        price:number,
        eventType:string,
        isExpenseType:boolean,
        isHourlyEventType:boolean,
        isWorkHour:boolean,
        isAproved:boolean,
        isRejected:boolean,
        taskCount:number,
        firstTaskStart:Date,
        lastTaskEnd:Date,){
            this.date = date;
            this.quantity = quantity;
            this.price = price;
            this.eventType = eventType;
            this.isExpenseType = isExpenseType;
            this.isHourlyEventType = isHourlyEventType;
            this.isWorkHour = isWorkHour;
            this.isAproved = isAproved;
            this.isRejected = isRejected;
            this.taskCount = taskCount;
            this.firstTaskStart = firstTaskStart;
            this.lastTaskEnd = lastTaskEnd;

    }
    date: Date;
    quantity:number;
    price:number;
    eventType:string;
    isExpenseType:boolean;
    isHourlyEventType:boolean;
    isWorkHour:boolean;
    isAproved:boolean;
    isRejected:boolean;
    taskCount:number;
    firstTaskStart:Date;
    lastTaskEnd:Date;
}
