import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserToken } from 'src/app/authentication/models/user-token/user-token';
import { TokenService } from 'src/app/authentication/services/token/token.service';
import { environment } from 'src/environments/environment.prod';
import { Order, Orders } from '../model/order';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  getOrders(userToken: UserToken): Observable<Orders> {   
    return this.httpClient.get<Orders>(`${API}/orders`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${API}/orders/${id}`);
  }
}
