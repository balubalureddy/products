import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { authGuard } from '../auth.guard';
import { deactivateGuard } from '../deactivate.guard';

const routes: Routes = [
  {path:"",component:ViewProductsComponent},
  {path:":id",component:ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }