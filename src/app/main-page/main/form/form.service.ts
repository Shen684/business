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
    // const body = {"name": user.name, "email": user.email, "text": user.text};
    return this.http.post('https://ilya-shevelev.ru/ru/api/v1/request/', user)
  }
}
