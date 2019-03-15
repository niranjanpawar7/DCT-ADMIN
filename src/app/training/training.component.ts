import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
   
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  upLodedContent = false;

  staticDropdown = [
      {value: 'select-topic', viewValue: 'Select Topic'},
      {value: 'Select-pProduct', viewValue: 'Select Product'}
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog() {
     
    const dialogRef = this.dialog.open(DialogDataExampleDialog);

      dialogRef.afterClosed().subscribe(result => { 
        this.upLodedContent = true;
      });
  };
  

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'upload.files.html',
  styleUrls: ['./training.component.css']
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
      
  }
}
