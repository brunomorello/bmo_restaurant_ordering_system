import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { CardModule } from '../components/card/card.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    ListOrdersComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CardModule
  ]
})
export class OrdersModule { }
