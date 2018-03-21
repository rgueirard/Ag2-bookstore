import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Book} from "../../core/model/book.model";
import {CatalogService} from "../../core/services/catalog.service";
import {switchMap} from "rxjs/operators";
import {Title} from "@angular/platform-browser";
import {tap} from "rxjs/operators/tap";
import {CartService} from "../../core/services/cart.service";
import {ActionService} from "../../core/services/action.service";

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit {

  book$: Observable<Book>;

  constructor( private route: ActivatedRoute,
               private catalogService: CatalogService,
               private title: Title) { }

  ngOnInit() {
    this.book$ = this.route.params
      .pipe(
        switchMap(datas => this.catalogService.getBook(datas.id)),
        tap(datas => this.title.setTitle('Livres: ' + datas.title))
      );
  }

}
