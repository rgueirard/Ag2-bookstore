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

  remove(row: CartRow) {
    this.rows = this.rows.filter(r => r!==row);
  }

  totalAmount(): number {
    return this.rows
      .map(row => row.amount())
      .reduce((total, value) => total+value, 0);
  }

  totalQuantity(): number {
    return this.rows
      .map(row => row.quantity)
      .reduce((total, value) => total+value, 0);
  }

  isEmpty(): boolean {
    return this.rows.length === 0;
  }
}
