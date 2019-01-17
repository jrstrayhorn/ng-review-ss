import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Injectable } from "@angular/core";

@Injectable()
export abstract class DataSource {
  // this is really a data service - base data service
  abstract getProducts(): Observable<Product[]>;
  abstract saveOrder(order: Order): Observable<Order>;
}
