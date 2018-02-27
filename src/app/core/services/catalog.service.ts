import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Book} from "../model/book.model";

const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(url);
  }

}
