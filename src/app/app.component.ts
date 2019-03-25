import { Component, HostListener, Renderer, ElementRef, Inject, Input, ViewChild, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End';
  // public show_dialog : boolean = false;
  data: any = {};
  public button_name : any = 'Show Login Form!';
  @ViewChild('hasMenu') hasMenu: ElementRef;
  @ViewChild('sideNavBar') sideNavBar: ElementRef;
  @ViewChild('mainContainer') mainContainer: ElementRef;
  @Input() scrollPoint: number;
   constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer,
    private el: ElementRef
 ){
    this.data.hv = false;

  }

  ngOnInit(){
    const allSubs = this.el.nativeElement.querySelectorAll('.has-submenu');
    const allNavs = this.el.nativeElement.querySelectorAll('.navbar-nav li');
    // console.log(allSubs);
    allSubs.forEach(element => {
      element.addEventListener("click", function(e) {
        allNavs.forEach(elm => {
          if(element != elm){
            elm.className = "has-submenu";
          }
        });
        console.log(element.className);
        element.className = (element.className == "has-submenu activeNav") ? "has-submenu" : "has-submenu activeNav";
      });
    });
  }

  public rmClass(obj){
    // console.log(obj);
    obj.forEach(element => {
        console.log(element.nativeElement);
    });
  }
  public isTouchDevice(){
      return typeof window.ontouchstart !== 'undefined';
  }
  public onHover(){
    this.data.hv = true;
  }

  public offOver(){
    this.data.hv = false;
  }

  public sidenavScroll(e){
    console.log(e);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(this.sideNavBar);
    const sideNavHeight = this.sideNavBar.nativeElement.scrollHeight - window.innerHeight;
    const windowScroll = window.scrollY;
     console.log('height', windowScroll);
     console.log('wht', window.innerHeight);
     console.log('owht', window.outerHeight);
    console.log(this.sideNavBar.nativeElement.scrollHeight);
    if (windowScroll >= sideNavHeight) {
      this.renderer.setElementClass(this.sideNavBar.nativeElement, 'sticky-nav', true);
      this.renderer.setElementStyle(this.sideNavBar.nativeElement, 'bottom', 0 + 'px');
    } else {
      this.renderer.setElementClass(this.sideNavBar.nativeElement, 'sticky-nav', false);
      this.renderer.setElementStyle(this.sideNavBar.nativeElement, 'bottom', '0px');
    }

 }
  // toggle() { 
  //   this.show_dialog = !this.show_dialog; 
  //   // CHANGE THE TEXT OF THE BUTTON.
  //   if(this.show_dialog) 
  //     this.button_name = "Hide Login Form!";
  //   else
  //     this.button_name = "Show Login Form!";
  // }
}
