import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {

  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(environment.backend + url);
  }

  public post<T>(url: string, input: any): Observable<T> {
    return this.httpClient.post<T>(environment.backend + url, input);
  }

  public delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(environment.backend + url);
  }


}
