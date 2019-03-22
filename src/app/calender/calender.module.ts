import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CalenderMaterialModule } from './calender-material.module';
import { calenderRoutingModule } from './routing-calender.module';
import { CalenderComponent } from './calender.component';
import { ViewCalenderComponent } from '../view-calender/view-calender.component';
import { FullCalendarModule } from 'ng-fullcalendar';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    calenderRoutingModule,
    CalenderMaterialModule,
    FullCalendarModule
  ],
  declarations: [
    CalenderComponent,
    ViewCalenderComponent
  ],
  entryComponents: []
})

export class CalenderModule { }