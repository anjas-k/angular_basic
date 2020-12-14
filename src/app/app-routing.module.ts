import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"cart",component:CartComponent},
  {path:"cart-item",component:CartItemComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"**",component:ProductListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
