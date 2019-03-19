import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
   
}
@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
     
    const dialogRef = this.dialog.open(SpeakerPopupUpload);

      dialogRef.afterClosed().subscribe(result => { 
       
      });
  };
  
}
@Component({
  selector: 'dialog-speaker-example-dialog',
  templateUrl: 'speaker-upload-popup.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerPopupUpload {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
      
  }
}