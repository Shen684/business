import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {
  public togTranslate!: boolean;
  constructor() {
    let labLENG = localStorage.getItem('lang')
    labLENG == 'ru' ? this.togTranslate = false : this.togTranslate = true
   }
}
