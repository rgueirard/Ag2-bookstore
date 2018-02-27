import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../core/model/book.model";
import {CatalogService} from "../../core/services/catalog.service";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  books$: Observable<Book []>

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.books$ = this.catalogService.getBooks();
  }

}
