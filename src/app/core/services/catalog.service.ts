import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../model/book.model";
import { shareReplay, map } from 'rxjs/operators';

const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const apikey = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  private books$: Observable<Book[]>;

  constructor(private http: HttpClient) {
    setInterval(() => {
      this.loadBooks();
    }, 10000);
  }

  private loadBooks() {
    this.books$ = this.http.get<Book[]>(`${url}${apikey}`)
      .pipe(
        shareReplay(1) //keep the 1 last results in its buffer
        // (the cold observable become a hot observable
        // meaning the next subscrition won't send a new request and instead use the last received)
      );
  }

  getBooks(): Observable<Book[]> {
    return this.books$;
  }

  getBook(id: string): Observable<Book> {
    return this.books$
      .pipe(
        map(books => books.find((book) => book._id.$oid === id))
      );
  }

}
