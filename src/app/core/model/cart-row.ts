import {Book} from "./book.model";
export class CartRow {
  constructor(public book: Book, public quantity: number = 1) {}

  amount(): number {
    return this.book.price * this.quantity;
  }
}
