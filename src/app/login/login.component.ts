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
     
    const dialogRef = this.dialog.open(LoginDialog);

      dialogRef.afterClosed().subscribe(result => { 
        
      });
  };
  ngOnInit() {
    setTimeout(() => {
      this.openDialog();  
    }, 1000);
    
  }
}
@Component({
  selector: 'dialog-date-example-dialog',
  templateUrl: 'login-forgot.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialog {
  public show:boolean = false;
  public log: boolean = true;
  public buttonName:any = 'forgot';
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
  toggle() {
    if(this.buttonName=='forgot')
    {
      this.show=!this.show;
      this.log=!this.log;
    }
    else 
    {
      this.show=false;
      this.log=true;
    }
  }

}