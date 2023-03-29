import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
scrollToAbout() {
    this.viewportScroller.scrollToAnchor('about');
}

scrollToTech() {
  this.viewportScroller.scrollToAnchor('technologies');
}

scrollToReview() {
  this.viewportScroller.scrollToAnchor('reviews');
}

menuToggle: boolean = false

toggle() {
  this.menuToggle = !this.menuToggle
  console.log(this.menuToggle);
  
}

}
