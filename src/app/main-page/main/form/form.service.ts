import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormComponent } from './form.component';
import { Form } from './form'; 

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  postData( user: Form) {
    return this.http.post('https://webion.pro/ru/api/v1/request/', user)
  }
}
