import { Injectable } from '@angular/core';
import {BackendClientService} from "../global/backend-client.service";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationApiService {

  constructor(private readonly client: BackendClientService) {}

  async login(email: string, password: string): Promise<any> {
    // here is the api from the back
    const url = 'user/login';

    const body = {
      email: email,
      password: password,
    };

    let user;
    try {
      user = await this.client.post<any>(url, body).toPromise();
    } catch (error) {
      console.log(error);
    }

    return user;
  }
}
