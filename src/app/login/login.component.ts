import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin = false;
  // private readonly authenticationApiService: AuthentificationApiService;


  // constructor(authenticationApiService: AuthentificationApiService) {
  //   this.authenticationApiService = authenticationApiService;
  // }
  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }



  async onLogin(form: NgForm) {
    console.log(form.value);
    let email = form.value['email'];
    let password = form.value['password'];

    // here we check login compte
    try {
      // await this.authenticationApiService.login(email, password);
    } catch (err) {
      console.log(err);
    }
    this.isLogin = true;
  }

}
