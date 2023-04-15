import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  
  constructor(private review: ServiceReviewsService) {}
  
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
  localLang = localStorage.getItem('lang')

  getText(i: number) {
    let par = `text_${this.localLang}`
    return this.reviews[i][par]
  }
  
  getName(i: number) {
    let par = `client_name_${this.localLang}`
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
