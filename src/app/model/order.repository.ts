import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { Observable } from "rxjs";
import { DataSource } from "./datasource";

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private dataSource: DataSource) {}

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
