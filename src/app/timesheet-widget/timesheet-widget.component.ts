import { Component, OnInit } from '@angular/core';
import { TimesheetWidgetService } from 'src/services/timesheet-widget.service';
import { EventGroup } from 'src/models/event-group';

@Component({
  selector: 'app-timesheet-widget',
  templateUrl: './timesheet-widget.component.html',
  styleUrls: ['./timesheet-widget.component.less']
})
export class TimesheetWidgetComponent implements OnInit {
  eventGroups:EventGroup[] = [];
  eventGroup: EventGroup;
  title:string;
  dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
  locale = 'en-GB';
  todayDate: Date;
  fullDateString: string;

  constructor(private _service: TimesheetWidgetService) { }

  ngOnInit() {
    this.todayDate = new Date();
    this.title = new Date().toLocaleDateString(this.locale, { year: 'numeric', month: 'long' });
    this._service.getEventGroups().subscribe(eg=>{
      this.eventGroups = eg;
      this.selectToday();
    })
  }

  getDayName(date:Date){
    return date.toLocaleDateString(this.locale, { weekday: 'short' });        
  }

  getTime(date:Date){
    if(!date)
      return;
    return date.toLocaleTimeString(this.locale, { hour: "2-digit", minute: "2-digit" });        
  }

  activateDate = (eventGroup: EventGroup) => {
    this.eventGroup = eventGroup;
    this.title = eventGroup.date.toLocaleDateString(this.locale, { year: 'numeric', month: 'long' });
    this.fullDateString = eventGroup.date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long' });
  }

  isDateToday = (date: Date) => {
    return date.getFullYear() === this.todayDate.getFullYear() 
      && date.getMonth() === this.todayDate.getMonth()  
      && date.getDate() === this.todayDate.getDate()
  }

  selectToday = () =>{
    let eventGroup = this.eventGroups
    .filter(eg=> this.isDateToday(eg.date))[0];

    if(!eventGroup)
      return;
      
    this.activateDate(eventGroup);
  }

}
