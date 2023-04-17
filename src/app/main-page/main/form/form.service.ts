import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormComponent } from './form.component';
import { Form } from './form'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  receivedUser: Form  | undefined ;
  done: boolean = false;
  toggleDone: boolean = true;
  // allForm!: FormGroup;
  constructor(private http: HttpClient) { 
  }

  allForm = new FormGroup({
    name: new FormControl('', [  Validators.maxLength(255)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(255), Validators.email]),
    text: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  postData( user: Form) {
    this.toggleDone = !this.toggleDone
    return this.http.post('https://webion.pro/ru/api/v1/request/', user).subscribe({
      next:(data: any) => {this.receivedUser=data; this.done=true;},
      error: error => console.log(error)
    });
    
  }


  // public allData() {
  //   this.allForm = new FormGroup({
  //     name: new FormControl('', [  Validators.maxLength(255)]),
  //     email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(255), Validators.email]),
  //     text: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //   })
  // }
}
