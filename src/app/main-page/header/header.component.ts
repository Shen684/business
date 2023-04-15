import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, Input, Renderer2, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ViewportScroller } from '@angular/common'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit {
  
  menuToggle: boolean = false
  public ariaLoc: any;
  toggleLogo: boolean = true
  toggleDark: boolean = false
  togTranslate: boolean = true
  lang = 'ru';
  public aria!: any;
  @ViewChild('container', {static: false}) container!: ElementRef<HTMLElement>;
  el!: HTMLElement;
  @ViewChild('but', {static: true}) button!: ElementRef;
  
  @Output() changeLang = new EventEmitter()
  
  
  constructor(private viewportScroller: ViewportScroller) {}
  localeList = [
    { code: 'en-US', label: 'English' },
    { code: 'ru', label: 'Русский' },
  ]
  
  labLENG = localStorage.getItem('lang')
  
  rusLang() {
    this.lang === 'ru'
    localStorage.setItem('lang', 'ru')
    this.changeLang.emit(this.lang)
    console.log(this.lang);
    if (this.labLENG == 'ru') {
      this.togTranslate = true
    }
  }
    
  enLang() {
    this.lang === 'en'
    localStorage.setItem('lang', 'en')
    this.changeLang.emit(this.lang)
    console.log(this.lang);
    if (this.labLENG == 'en') {
      this.togTranslate = false
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
  
  toggle() {
  this.menuToggle = !this.menuToggle
  console.log(this.menuToggle);
  }
  
  switchTheme() {
  console.log('switchTheme');
  this.el.classList.toggle('dark-theme');
  }
  
  ngOnInit(): void {
  let loc = localStorage.getItem('lang')
    if (loc == 'ru') {
      this.togTranslate = false
    } else {
      this.togTranslate = true
    }
  }
    
  changeBody() {
    const body = document.body
    if (body) {
      body.classList.toggle('dark-theme');
      this.toggleLogo = !this.toggleLogo
    }
  }
  
  ngAfterViewInit(): void {
    this.el = this.container.nativeElement;
  }
}
