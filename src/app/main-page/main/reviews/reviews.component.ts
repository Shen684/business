import { Component } from '@angular/core';
import { ServiceReviewsService } from './service-reviews.service';
import { OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  providers: [ServiceReviewsService]
})
export class ReviewsComponent implements OnInit {
  reviews!: any;
  currentIndex: number = 4;
  client_name_en: any;
  texts!: {};
  public res: any;
  
  constructor(private review: ServiceReviewsService) {
    // localStorage.setItem('lang', 'ru')
  }
  
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true,  dynamicBullets: true, },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  getData() {
    this.review.getReviews().subscribe((res) => {
      this.reviews = res
      this.currentIndex = 0;
    })
  }
  
  getText(i: number) {
    let localLang = localStorage.getItem('lang')
    let par = `text_${localLang}`
    return this.reviews[i][par]
  }
  
  getName(i: number) {
    // localStorage.setItem('lang', )
    let localLang = localStorage.getItem('lang')
    let par = `client_name_${localLang}`
    return this.reviews[i][par]
  }
    
  ngOnInit() {
    this.getData()
  }
  

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.reviews.length - 1
      : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.reviews.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  goToSlide(rewiewIndex: number): void {
    this.currentIndex = rewiewIndex;
  }

  getCurrentSlide() {
    this.currentIndex == this.reviews.id ? this.currentIndex : null
  }
}
