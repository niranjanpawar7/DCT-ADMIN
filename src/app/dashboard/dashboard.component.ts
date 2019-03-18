import { Component, OnInit } from '@angular/core';
 
const ELEMENT_DATA = [
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
   
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['ID', 'Date', 'Topic', 'Location', 'Speaker', 'SalesRep', 'RSVP'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
