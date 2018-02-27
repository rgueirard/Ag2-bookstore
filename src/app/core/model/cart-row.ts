import {Book} from "./book.model";
export class CartRow {
  constructor(public book: Book, public quantity: number = 1) {}
}
