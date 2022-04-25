import { OrderItem } from "./order-item";

export interface Order {
    id: number;
    tableId: number;
    employeeId: number;
    items: Array<OrderItem>;
    createdAt: string;
    // status: 
}

export type Orders = Array<Order>;
