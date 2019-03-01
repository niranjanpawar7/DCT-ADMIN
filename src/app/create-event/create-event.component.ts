import { Component, OnInit } from '@angular/core';

 

const ELEMENT_DATA = [
  { S: 1, M: 2, T: 3, W: 4, TH: 1, F: 2, SA: 3 },
   
];

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

  displayedColumns: string[] = ['S', 'M', 'T', 'W', 'TH', 'F', 'SA'];
  dataSource = ELEMENT_DATA;

}
