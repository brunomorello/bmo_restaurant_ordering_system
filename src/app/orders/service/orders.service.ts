import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
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

  deleteOrderById(id: number): Observable<boolean> {
    return this.httpClient.delete<Order>(`${API}/orders/${id}`, { observe: 'response' })
      .pipe(
        map((res) => {
          console.log(`Deleting Order by id# ${id}`);
          console.log(res);
          return true;
        }),
        catchError((err) => {
          console.log(`error to delete order by id# ${id}`);
          console.log(err);
          return err.status === 404 || err.status === 500 ? of(false) : throwError(() => new Error(err));
        })
      );
  }

  updateOrder(order: Order): Observable<boolean> {
    return this.httpClient.put<Order>(`${API}/orders/${order.id}`, order, { observe: 'response' })
      .pipe(
        map((res) => {
          console.log(`Updating Order id# ${order.id}`);
          console.log(res);
          return true;
        }),
        catchError((err) => {
          console.log(`error to update Order id# ${order.id}`);
          console.log(err);
          return err.status === 500 || err.status === 404 ? of(false) : throwError(() => new Error(err));          
        })
      )
  }

  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${API}/orders/`, order);
  }
}
