import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  data: any = {};
  constructor() { }

  ngOnInit() {
    this.data.calenderView = true;
  }

}
