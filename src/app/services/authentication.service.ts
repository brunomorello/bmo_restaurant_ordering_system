import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _url: string = 'http://localhost:3000/employees'

  constructor(private httpClient: HttpClient) { }

  authenticate(user: String, pwd: String): Observable<any> {
    return this.httpClient.post(this._url, {
      username: user,
      password: pwd
    });
  }
}
