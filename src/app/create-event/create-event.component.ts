import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';
import { MatDialog } from '@angular/material';


const ELEMENT_DATA = [
  { S: 1, M: 2, T: 3, W: 4, TH: 1, F: 2, SA: 3 },

];

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(public dialog: MatDialog) { }



  ngOnInit() {
    setTimeout(()=>{
      this.openDialog();
    })
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(createEventPopup);

    dialogRef.afterClosed().subscribe(result => {
       console.log('dailog close')
    });
  }

  displayedColumns: string[] = ['S', 'M', 'T', 'W', 'TH', 'F', 'SA'];
  dataSource = ELEMENT_DATA;

  stepperNext(stepper: MatStepper) {
    stepper.next();
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'event-popup.html',
  styleUrls: ['./create-event.component.css']
})
export class createEventPopup { }
