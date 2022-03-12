import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthentificationApiService} from "../../authentification-api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // private readonly authenticationApiService: AuthentificationApiService;

  // constructor(authenticationApiService: AuthentificationApiService) {
  //   this.authenticationApiService = authenticationApiService;
  // }
  constructor() {
  }

  ngOnInit(): void {
  }


  async onLogin(form: NgForm) {
    console.log(form.value);
    let username = form.value['username'];
    let email = form.value['email'];
    let password = form.value['password'];
    // here we check register compte
    try {
       // await this.authenticationApiService.resetPassword(username, email, password);
    } catch (err) {
      console.log(err);
    }
  }

}
