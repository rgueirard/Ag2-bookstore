import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-cart-order-reactive',
  templateUrl: './cart-order-reactive.component.html',
  styleUrls: ['./cart-order-reactive.component.css']
})
export class CartOrderReactiveComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Commande (Réactive)');
  }

}
