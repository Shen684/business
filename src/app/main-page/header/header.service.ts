import { ViewportScroller } from '@angular/common';
import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  lang = 'ru';
  togTranslate: boolean = true
  toggleLogo: boolean = true

  @Output() changeLang = new EventEmitter()

  constructor(private viewportScroller: ViewportScroller) {
    let bolTrs = localStorage.getItem('lang')
    if (bolTrs == null) {
      localStorage.setItem('lang', 'ru')
    }
   }
   
   ruLang() {
     this.lang === 'ru'
     localStorage.setItem('lang', 'ru')
  }
  
  enLang() {
    this.lang === 'en'
    localStorage.setItem('lang', 'en')
  }
  
  getLoc() {
    let loc = localStorage.getItem('lang');
    loc == 'ru' ? this.togTranslate = false : this.togTranslate = true;
  }

  chBody() {
    const body = document.body
    if (body) {
      body.classList.toggle('dark-theme');
      this.toggleLogo = !this.toggleLogo
    }
  }

  scrollToAbout() {
    this.viewportScroller.scrollToAnchor('about');
  }

  scrollToTech() {
    this.viewportScroller.scrollToAnchor('technologies');
  }

  scrollToReview() {
    this.viewportScroller.scrollToAnchor('reviews');
  }
}
