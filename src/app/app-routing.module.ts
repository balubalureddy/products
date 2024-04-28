import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"view-product",component:ViewProductsComponent},
  {path:"view-product/:id",component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
