import { Component, OnInit } from '@angular/core';

  const TASK_DATA = [
      {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
      {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
      {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
      {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
      {ID: 6234, Date: 3/6/19, Topic: 'Neuroscience Management',  Speaker: 'Charlotte Ford', SalesRep: 'Georgia Copeland', Task: 'Finalize Contract'},
  ];

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent implements OnInit {
  
  displayedColumns1: string[] = ['ID', 'Date', 'Topic', 'Speaker', 'SalesRep', 'Task'];
  dataSource1 = TASK_DATA;

  constructor() { }

  ngOnInit() {
  }

}
