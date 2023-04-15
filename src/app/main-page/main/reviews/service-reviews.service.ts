import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceReviewsService {

  constructor(private http: HttpClient) { }

  public getReviews() {
    return this.http.get('https://webion.pro/ru/api/v1/reviews/')
  }
}
