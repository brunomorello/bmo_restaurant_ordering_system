import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  orders!: Orders;
  currentUserSub!: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((param) => {
      this.orders = this.activatedRoute.snapshot.data['orders'];
    });
  }

}
