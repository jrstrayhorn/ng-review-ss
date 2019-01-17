import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Cart } from "./cart.model";
import { OrderRepository } from "./order.repository";
import { Order } from "./order.model";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { DataSource } from "./datasource";
import { StaticDataSource } from "./static.datasource";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    { provide: DataSource, useClass: RestDataSource }
  ]
})
export class ModelModule {}
