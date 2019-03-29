import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatHorizontalStepper} from '@angular/material'; 

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  viewVenueDetails() {
     
    const dialogRef = this.dialog.open(ViewVenueDetailsPopup,{
      panelClass: 'view-venue-details',
    });

      dialogRef.afterClosed().subscribe(result => { 

      });
  };
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './view-details.html',
  styleUrls: ['./venue-list.component.css']
})
export class ViewVenueDetailsPopup {
  constructor() {
      
  }
}
