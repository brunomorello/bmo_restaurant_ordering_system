import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/authentication/services/token/token.service';
import { MenusFood } from '../model/menu-food';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class MenuFoodService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  getAllMenus(): Observable<MenusFood> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<MenusFood>(`${API}/menu`, {
      headers
    });
  }
}
