import { Component, OnInit, Inject } from '@angular/core'; 
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
   
}

@Component({
  selector: 'app-manage-spkeaker-content',
  templateUrl: './manage-spkeaker-content.component.html',
  styleUrls: ['./manage-spkeaker-content.component.css']
})
export class ManageSpkeakerContentComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(speakerUpload, {
      data: {
        animal: 'panda'
      }
    });
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'speaker-uploded.html',
  styleUrls: ['./manage-spkeaker-content.component.css']
})
export class speakerUpload {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
