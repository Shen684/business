import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'; 


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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

scrollToMain() {
  this.viewportScroller.scrollToAnchor('/');
}

}
