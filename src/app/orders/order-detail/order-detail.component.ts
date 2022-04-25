import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderId!: number;
  orderObservalbe!: Observable<Order>;

  constructor(private ordersService: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params['orderId'];
    this.orderObservalbe = this.ordersService.getOrderById(this.orderId);
  }

}
