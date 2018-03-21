import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../core/model/book.model";
import {CatalogService} from "../../core/services/catalog.service";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {CartService} from "../../core/services/cart.service";
import {ActionService} from "../../core/services/action.service";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  books$: Observable<Book []>;

  constructor(private catalogService: CatalogService,
              private title: Title) { }

  ngOnInit() {
    this.books$ = this.catalogService.getBooks();
    this.title.setTitle('Catalogue des livres')
  }

  // addToCart(book: Book) {
  //   this.cartService.add(book, 1);
  //   this.router.navigate(['cart/content']);
  // }

}
