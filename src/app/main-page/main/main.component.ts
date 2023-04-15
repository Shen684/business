import { Component, HostListener, Input  } from '@angular/core';
// import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    windowScrolled?: boolean;
    @Input() lang: string = 'ru';
    constructor() {}
  
  @HostListener("window:scroll", [])
    
  onWindowScroll() {
      if ( document.body.scrollTop > 500) {
          this.windowScrolled = true;
      } 
     else if (document.body.scrollTop < 300) {
          this.windowScrolled = false;
      }
  }

  scrollToTop() {
      (function smoothscroll() {
          const currentScroll =  document.body.scrollTop;
          if (currentScroll > 300) {
              window.scrollTo(0,  0);
          }
      })();
  }
}
