import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventGroup } from 'src/models/event-group';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimesheetWidgetService {

  constructor(
    // private _http: HttpClient
    ) { }

  getEventGroups(): Observable<EventGroup[]>{
    let eventGroups: EventGroup[] = [];
    for(let dayNo = 6; dayNo>=0; dayNo--){
      let date:Date = new Date();
      date = new Date(date.setDate(date.getDate() - dayNo));
      let startDate:Date = new Date(new Date(date).setHours(8,30));
      let endDateDate:Date = new Date(new Date(date).setHours(20,30));
      let taskCount:number = (Math.random() * 10) + 3;
      let price:number = taskCount * 12;
      let eventGroup:EventGroup = new EventGroup(
        date, taskCount, price,'Hourly',false,true, true,true,false,taskCount,startDate,endDateDate
      )
      if(dayNo === 3){
        eventGroup.eventType = 'Expence';
        eventGroup.isHourlyEventType = false;
        eventGroup.isExpenseType = true
      }else if (dayNo === 4){
        eventGroup.isRejected = true;
      }
       if (eventGroup.firstTaskStart.getDay() === 6 || eventGroup.firstTaskStart.getDay() === 0){
        eventGroup.firstTaskStart = null;
        eventGroup.taskCount = 0;
      }else if(eventGroup.firstTaskStart.getDay() === 1){
        eventGroup.isAproved = false;
        eventGroup.isRejected = false;
      }

      eventGroups.push(eventGroup)
    }
    
    return of(eventGroups)
  }
}
