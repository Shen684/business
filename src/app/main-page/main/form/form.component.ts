import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from './form';
import { FormService } from './form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService]
})
export class FormComponent  {
  receivedUser: Form  | undefined ;
  done: boolean = false;
  user: Form = new Form('', '', '')

  constructor(private httpService: FormService) {
  }

  allForm!: FormGroup;
  ngOnInit(): void {
    this.allForm = new FormGroup({
      name: new FormControl('', [  Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(255), Validators.email]),
      text: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

  submit(user: Form) {
    this.httpService.postData(user)
    .subscribe({
      next:(data: any) => {this.receivedUser=data; this.done=true;},
      error: error => console.log(error)
    });
    this.toggleDone = !this.toggleDone
  }

  toggleDone: boolean = true

  changeDone() {
    this.toggleDone = !this.toggleDone
  }
}
