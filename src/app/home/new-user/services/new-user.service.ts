import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  private _NEW_USER_URL: string = `${environment.apiURL}/employees`;

  constructor(private httpClient: HttpClient) { }

  createNewUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post(this._NEW_USER_URL, newUser);
  }
}
