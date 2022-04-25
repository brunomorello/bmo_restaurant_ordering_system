import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private ordersService: OrdersService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params['orderId'];
    this.orderObservalbe = this.ordersService.getOrderById(this.orderId);
  }

  delete(order: Order): void {
    this.ordersService.deleteOrderById(order.id).subscribe(() => {
      this.router.navigate(['']);
    }, (err) => {
      console.error(err);      
    })
  }
}
