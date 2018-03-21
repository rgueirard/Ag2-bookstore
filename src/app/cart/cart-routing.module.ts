import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartOrderReactiveComponent} from "./cart-order-reactive/cart-order-reactive.component";
import {CartOrderComponent} from "./cart-order/cart-order.component";
import {CartContentComponent} from "./cart-content/cart-content.component";
import {CartRootComponent} from "./cart-root/cart-root.component";

const routes: Routes = [
  // { path: 'cart', component: CartRootComponent,
  { path: '', component: CartRootComponent, // <= for lazyloading cart already exist
    children: [
      { path: 'content', component: CartContentComponent },
      { path: 'order', component: CartOrderComponent },
      { path: 'order-reactive', component: CartOrderReactiveComponent },
      { path: '', redirectTo: 'content', pathMatch: 'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
