import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceReviewsService } from './service-reviews.service';
import { OnInit } from '@angular/core';
import { InterfaceRew } from './interface-rew';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  providers: [ServiceReviewsService]
})
export class ReviewsComponent implements OnInit {
  // reviews?: InterfaceRew[];
  reviews!: any;
  currentIndex: number = 4;

  
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
      console.log(this.reviews);
    })
  }
  
  public ngOnInit() {
    this.getData()
  }
  
  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.reviews.length - 1
      : this.currentIndex - 1;
    this.currentIndex = newIndex;
    console.log(this.currentIndex);
    
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
  // public changeSlide(currentRewiew: number) {
  //    this.currentRewiew = this.reviews.id ;
  //     this.currentRewiew = currentRewiew > 0 ? currentRewiew + 1 : currentRewiew - 1;
  //     if (this.currentRewiew >= this.reviews.length || this.currentRewiew <= 0) {
  //       currentRewiew = 0;
  //     }
  //     console.log(this.currentRewiew);
  // }

}
