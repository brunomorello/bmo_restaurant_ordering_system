import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UserService } from 'src/app/authentication/services/user/user.service';
import { Orders } from '../model/order';
import { OrdersService } from '../service/orders.service';

@Injectable({
  providedIn: 'root'
})
export class ListOrdersResolver implements Resolve<Orders> {

  constructor(private orderService: OrdersService, private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Orders> {
    // using rxjs
    return this.userService.returnUser()
      .pipe(
        switchMap((userResp) => {
          // validate if obj attr is empty, if yes assign a value to it receiver var
          // const user = userResp.jti ?? '';
          return this.orderService.getOrders(userResp);
        }),
        take(1)
      );
  }
}
