import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ViewProductsComponent } from './view-products/view-products.component';


@NgModule({
  declarations: [
    ProductComponent,
    ViewProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }