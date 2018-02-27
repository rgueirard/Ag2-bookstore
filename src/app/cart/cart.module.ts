import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CartOrderComponent } from './cart-order/cart-order.component';
import { CartOrderReactiveComponent } from './cart-order-reactive/cart-order-reactive.component';
import { CartRootComponent } from './cart-root/cart-root.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CartRoutingModule
  ],
  declarations: [CartContentComponent, CartOrderComponent, CartOrderReactiveComponent, CartRootComponent]
})
export class CartModule { }
