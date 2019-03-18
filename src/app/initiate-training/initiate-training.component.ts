import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
   
}

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


  constructor(public dialog: MatDialog) { }
  openDialog() {
     
    const dialogRef = this.dialog.open(DialogDateExampleDialog);

      dialogRef.afterClosed().subscribe(result => { 
        
      });
  };
  ngOnInit() {
  }

}
@Component({
  selector: 'dialog-date-example-dialog',
  templateUrl: 'select-date.html',
  styleUrls: ['./initiate-training.component.css']
})
export class DialogDateExampleDialog {
  selectedDate: string;
  selectDate = [
    {value: 'live', viewValue: 'Live'},
    {value: 'online', viewValue: 'Online'}
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.selectedDate='live';
  }
}

