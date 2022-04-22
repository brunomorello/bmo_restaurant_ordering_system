import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/authentication/services/token/token.service';
import { environment } from 'src/environments/environment.prod';
import { Order } from '../model/order';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  getOrders(): Observable<Order> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Order>(`${API}/orders`, {
      headers
    });
  }
}
