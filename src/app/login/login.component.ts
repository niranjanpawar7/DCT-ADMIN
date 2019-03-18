import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
   
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
     
    const dialogRef = this.dialog.open(DialogLoginExampleDialog);

      dialogRef.afterClosed().subscribe(result => { 
        
      });
  };
  ngOnInit() {
  }
}
@Component({
  selector: 'dialog-date-example-dialog',
  templateUrl: 'login-forgot.html',
  styleUrls: ['./login.component.css']
})
export class DialogLoginExampleDialog {
  selectedDate: string;
  selectDate = [
    {value: 'live', viewValue: 'Live'},
    {value: 'online', viewValue: 'Online'}
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.selectedDate='live';
  }
}