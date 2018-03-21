import { Injectable } from '@angular/core';
import {Book} from "../model/book.model";
import {CartService} from "./cart.service";
import {Router} from "@angular/router";

@Injectable()
export class ActionService {

  constructor(private cartService: CartService, private router: Router) { }

  addToCart(book: Book) {
    this.cartService.add(book, 1);
    this.router.navigate(['/cart/content']);
  }

  orderCart() {
    this.router.navigate(['/cart/order'])
  }

}
