import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetWidgetComponent } from './timesheet-widget/timesheet-widget.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AddTaskComponent } from './add-task/add-task.component';


const routes: Routes = [
  { path:'timesheet-widget',component:TimesheetWidgetComponent },
  { path:'timesheet',component:TimesheetComponent },
  { path:'add-task',component:AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
