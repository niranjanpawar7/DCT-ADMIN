import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  staticDropdown = [
      {value: 'select-topic', viewValue: 'Select Topic'},
      {value: 'Select-pProduct', viewValue: 'Select Product'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
