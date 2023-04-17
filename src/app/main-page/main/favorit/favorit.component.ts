import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FavoritService } from './favorit.service';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss'],
  providers: [FavoritService]

})
export class FavoritComponent {
  photoTog: boolean = true
  labLENG = localStorage.getItem('lang')
  togTranslate: boolean = true
  constructor (private viewportScroller: ViewportScroller, private favoritService: FavoritService) {
    // let labLENG = localStorage.getItem('lang')
    // if (labLENG == 'ru') {
    //   this.togTranslate = false
    // }
    // if (labLENG == 'en') {
    //   this.togTranslate = true
    // }
    this.togTranslate = this.favoritService.togTranslate
  }

  scrollToBlocks() {
    this.viewportScroller.scrollToAnchor('blocks');
  }

}
