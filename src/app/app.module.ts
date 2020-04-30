import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TimesheetWidgetComponent } from './timesheet-widget/timesheet-widget.component';

import { TimesheetWidgetService } from 'src/services/timesheet-widget.service';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AddTaskComponent } from './add-task/add-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TimesheetWidgetComponent,
    TimesheetComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TimesheetWidgetService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
