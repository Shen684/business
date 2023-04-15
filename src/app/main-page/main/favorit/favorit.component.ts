import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss']
})
export class FavoritComponent {
  photoTog: boolean = true
  labLENG = localStorage.getItem('lang')
  togTranslate: boolean = true
  constructor (private viewportScroller: ViewportScroller) {
    let labLENG = localStorage.getItem('lang')
    if (labLENG == 'ru') {
      this.togTranslate = false
    }
    if (labLENG == 'en') {
      this.togTranslate = true
    }
  }

  scrollToBlocks() {
    this.viewportScroller.scrollToAnchor('blocks');
  }

}
