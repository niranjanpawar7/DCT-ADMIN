import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatStepper } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA, MatHorizontalStepper} from '@angular/material'; 

export interface DialogData {
   
}

@Component({
  selector: 'app-reconcile-speaker-program',
  templateUrl: './reconcile-speaker-program.component.html',
  styleUrls: ['./reconcile-speaker-program.component.css']
})
export class ReconcileSpeakerProgramComponent implements OnInit {
  
  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  dataSource = [
    {type: 'Airfare', alexon: '$000.00', speaker: '$000.00', total: '$000.00'},
    {type: 'Lodging', alexon: '$000.00', speaker: '$000.00', total: '$000.00'},
    {type: 'Ground Transportation', alexon: '$000.00', speaker: '$000.00', total: '$000.00'},
    {type: 'Other', alexon: '$000.00', speaker: '$000.00', total: '$000.00'},
    {type: 'Subtotals', alexon: '$000.00', speaker: '$000.00', total: '$000.00'},
  ];
  displayedColumns: string[] = ['Expense Type', 'Alexion Submitted', 'Speaker Submitted', 'Alexion and Speaker Total', 'Details'];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }
  
  stepperNext(stepper: MatStepper){
    stepper.next();
  }

  stepperPrev(stepper: MatStepper){
    stepper.previous();
  }

  openDialog() {
     
    const dialogRef = this.dialog.open(RecSpeakComp,{
      panelClass: 'speaker-expense-edit-form',
    });

      dialogRef.afterClosed().subscribe(result => { 

      });
  };

  uploadFileModal() {
     
    const dialogRef = this.dialog.open(UploadFileModal,{
      panelClass: 'upload-files-modal',
    });

      dialogRef.afterClosed().subscribe(result => { 

      });
  };

}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './speaker-expence-edit.html',
  styleUrls: ['./reconcile-speaker-program.component.css']
})
export class RecSpeakComp {
  dataSource = [];
  displayedColumns: string[] = ['Submitted By', 'Date Submitted', 'Payee', 'Total', 'Action'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
      
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './upload-files.html',
  styleUrls: ['./reconcile-speaker-program.component.css']
})
export class UploadFileModal {
  dataSource = [];
  displayedColumns: string[] = ['Submitted By', 'Date Submitted', 'Payee', 'Total', 'Action'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
      
  }
}
