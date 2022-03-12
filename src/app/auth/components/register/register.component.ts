import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // private readonly authenticationApiService: AuthentificationApiService;

  // constructor(authenticationApiService: AuthentificationApiService) {
  //   this.authenticationApiService = authenticationApiService;
  // }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void {
    if (form.value['password'] !== form.value['confirmPassword']) {
      console.log('test here');
    }

    try {
      // await this.authenticationApiService.(email, password);
    } catch (e) {
      console.log(e);
    }
    console.log(form.value);
    console.log(form.valid);
  }

}
