import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiate-training',
  templateUrl: './initiate-training.component.html',
  styleUrls: ['./initiate-training.component.css']
})
export class InitiateTrainingComponent implements OnInit {

  staticDropdown = [
    {value: 'select-slide-deck', viewValue: 'Select Slide Deck'},
    {value: 'Select-Product', viewValue: 'Select Product'}
];
  constructor() { }

  ngOnInit() {
  }

}
