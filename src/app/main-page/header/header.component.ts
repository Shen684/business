import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, Input, Renderer2, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ViewportScroller } from '@angular/common'; 
import { HeaderService } from './header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  
  menuToggle: boolean = false
  toggleDark: boolean = false
  toggleLogo: boolean = true
  togTranslate: boolean = true;
  lang = '';
  @ViewChild('container', {static: false}) container!: ElementRef<HTMLElement>;
  
  @Output() changeLang = new EventEmitter()
  
  constructor(private viewportScroller: ViewportScroller, private headerService: HeaderService) {}
  
  localeList = [
    { code: 'en-US', label: 'English' },
    { code: 'ru', label: 'Русский' },
  ]
  
  rusLang() {
      this.headerService.ruLang()
      this.lang = this.headerService.lang
      this.changeLang.emit(this.lang)
  }
  
  englishLang() {
    this.headerService.enLang()
    this.lang = this.headerService.lang
    this.changeLang.emit(this.lang)
  }
  

  scrAbout() {
    this.headerService.scrollToAbout()
  }
  
  scrTech() {
    this.headerService.scrollToTech()
  }
  
  scrReview() {
  this.headerService.scrollToReview()
  }
  
  toggle() {
  this.menuToggle = !this.menuToggle
  }
  
  ngOnInit(): void {
    this.headerService.getLoc()
    this.togTranslate = this.headerService.togTranslate
  }
    
  changeBody() {
    this.headerService.chBody()
    this.toggleLogo = this.headerService.toggleLogo 
  }
}
