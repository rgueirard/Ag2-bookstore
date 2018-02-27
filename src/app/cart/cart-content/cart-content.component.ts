import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {CartService} from "../../core/services/cart.service";
import {CartRow} from "../../core/model/cart-row";

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {

  constructor(private title: Title, public cartService: CartService) { }

  ngOnInit() {
    this.title.setTitle('Panier');
  }

}
