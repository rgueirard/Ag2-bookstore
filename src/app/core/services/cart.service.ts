import { Injectable } from '@angular/core';
import {CartRow} from "../model/cart-row";
import {Book} from "../model/book.model";

@Injectable()
export class CartService {

  rows: CartRow[] = [];

  constructor() { }

  add(book: Book, quantity: number = 1): void {
    this.rows.push(new CartRow(book, quantity));
  }

  isEmpty(): boolean {
    return this.rows.length === 0;
  }
}
