import { Component, Input, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UserToken } from 'src/app/authentication/models/user-token/user-token';
import { UserService } from 'src/app/authentication/services/user/user.service';
import { Orders } from '../model/order';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  orders!: Observable<Orders>;
  currentUserSub!: string;

  constructor(
    private userService: UserService,
    private ordersService: OrdersService
  ) { }
  
  ngOnInit(): void {

    // using rxjs
    this.orders = this.userService.returnUser()
      .pipe(
        switchMap((user) => {
          this.currentUserSub = user.sub ?? '';
          return this.ordersService.getOrders(user);
        })
      );
  }

}
