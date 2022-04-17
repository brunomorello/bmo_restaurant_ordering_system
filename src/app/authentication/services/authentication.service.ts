import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user-token/user';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _url: string = 'http://localhost:8080/login'

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  authenticate(userId: number, pwd: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(this._url, {
      userId: userId,
      password: pwd
    }, 
    {
      observe: 'response'
    }).pipe(
      tap((resp) => {
        const user = resp.body as User;
        console.log('authenticate:');
        console.log(user);
        this.userService.saveToken(user.token ?? '');
      })
    );
  }
}
