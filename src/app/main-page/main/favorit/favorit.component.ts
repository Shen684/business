import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss']
})
export class FavoritComponent {
  constructor (private viewportScroller: ViewportScroller) {}

  scrollToBlocks() {
    this.viewportScroller.scrollToAnchor('blocks');
  }
  
}
