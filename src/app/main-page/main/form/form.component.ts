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
  toggleDone: boolean = true
  user: Form = new Form('', '', '')

  constructor(private httpService: FormService) {
  }

  allForm!: FormGroup;
  ngOnInit(): void {
    this.allForm = this.httpService.allForm
  }

  submit(user: Form) {
    this.httpService.postData(user)
    this.toggleDone = this.httpService.toggleDone
  }

  changeDone() {
    this.toggleDone = !this.toggleDone
  }
}
