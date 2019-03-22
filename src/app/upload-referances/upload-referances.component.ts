 
import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {}

@Component({
  selector: 'app-upload-referances',
  templateUrl: './upload-referances.component.html',
  styleUrls: ['./upload-referances.component.css']
})
export class UploadReferancesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(upoadRefPopup, {
      data: {
        animal: 'panda'
      }
    });
  } 
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'upload-refernce-popup.html',
  styleUrls: ['./upload-referances.component.css']
})

export class upoadRefPopup {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}