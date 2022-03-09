import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    if (form.value['password'] !== form.value['confirmPassword']) {
      console.log('test here');
    }
    console.log(form.value);
    console.log(form.valid);
  }

}
