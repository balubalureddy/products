import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { DontHaveAccessComponent } from './dont-have-access/dont-have-access.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"product",loadChildren: ()=> import('./products/products.module').then(module => module.ProductsModule)},
  {path:"no-access",component:DontHaveAccessComponent},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
