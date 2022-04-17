import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import jwt_decode from 'jwt-decode';
import { User } from '../../models/user-token/user'; 
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userTokenSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) { 
    if (this.tokenService.hasToken()) {
      this.decodeJwt();
    }
  }

  private decodeJwt() {
    const token = this.tokenService.getToken();
    const userToken = jwt_decode(token) as User;
    this.userTokenSubject.next(userToken);
  }

  returnUser(): Observable<User> {
    return this.userTokenSubject.asObservable();
  }

  saveToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeJwt();
  }

  logout(): void {
    this.tokenService.deleteToken();
    this.userTokenSubject.next({});
  }

  isLoggedIn(): boolean {
    return this.tokenService.hasToken();  
  }
}
