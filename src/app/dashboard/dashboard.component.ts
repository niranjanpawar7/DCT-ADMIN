import { Component, OnInit } from '@angular/core';
 
const PROGRAMS_DATA = [
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Location: 'Bridgewater, NJ', Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', RSVP: 30},
];

const TASK_DATA = [
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
];

const NOTIFICATION_DATA = [
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Action: 'Georgia Copeland', By: 'Finalize Contract',  Speaker: 'Charlotte Ford',},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Action: 'Georgia Copeland', By: 'Finalize Contract',  Speaker: 'Charlotte Ford',},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Action: 'Georgia Copeland', By: 'Finalize Contract',  Speaker: 'Charlotte Ford',},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Action: 'Georgia Copeland', By: 'Finalize Contract',  Speaker: 'Charlotte Ford',},
  {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management', Action: 'Georgia Copeland', By: 'Finalize Contract',  Speaker: 'Charlotte Ford',},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['ID', 'Date', 'Topic', 'Location', 'Speaker', 'SalesRep', 'RSVP'];
  dataSource = PROGRAMS_DATA;

  displayedColumns1: string[] = ['ID', 'Date', 'Topic', 'Speaker', 'SalesRep', 'Task'];
  dataSource1 = TASK_DATA;

  displayedColumns2: string[] = ['ID', 'Date', 'Topic', 'Action', 'By',  'Speaker'];
  dataSource2 = NOTIFICATION_DATA;

  constructor() { }

  ngOnInit() {
  }

}
