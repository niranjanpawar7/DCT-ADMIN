import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End';
  public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';


  toggle() { 
    this.show_dialog = !this.show_dialog; 
    // CHANGE THE TEXT OF THE BUTTON.
    if(this.show_dialog) 
      this.button_name = "Hide Login Form!";
    else
      this.button_name = "Show Login Form!";
  }
}
