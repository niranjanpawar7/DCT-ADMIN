import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  viewDetails() {
     
    const dialogRef = this.dialog.open(ViewAuditPopup,{
      panelClass: 'view-audit-modal',
    });

      dialogRef.afterClosed().subscribe(result => { 

      });
  };

  ProgramStatus() {
     
    const dialogRef = this.dialog.open(ProgramStatusPopup,{
      panelClass: 'program-status-modal',
    });

      dialogRef.afterClosed().subscribe(result => { 

      });
  };

  TravelInfo() {
     
    const dialogRef = this.dialog.open(TravelInfoPopup,{
      panelClass: 'travel-info-modal',
    });

      dialogRef.afterClosed().subscribe(result => { 

      });
  };

  HotelInfo() {
     
    const dialogRef = this.dialog.open(HotelInfoPopup,{
      panelClass: 'hotel-info-modal',
    });

      dialogRef.afterClosed().subscribe(result => { 

      });
  };

  openAddAttendee(){
    const dialogRef = this.dialog.open(AddAttendeePopup,{
      panelClass: 'add-attendee-modal',
    });

      dialogRef.afterClosed().subscribe(result => { 

      });
  };
  

}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './view-audit.html',
  styleUrls: ['./event-details.component.css']
})
export class ViewAuditPopup {
  
  constructor() {
      
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './program-status.html',
  styleUrls: ['./event-details.component.css']
})
export class ProgramStatusPopup {
  constructor() {
      
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './travel-info.html',
  styleUrls: ['./event-details.component.css']
})
export class TravelInfoPopup {
  constructor() {
      
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './hotel-info.html',
  styleUrls: ['./event-details.component.css']
})
export class HotelInfoPopup {
  constructor() {
      
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './add-attendee.html',
  styleUrls: ['./event-details.component.css']
})
export class AddAttendeePopup {
  constructor() {
      
  }
}


