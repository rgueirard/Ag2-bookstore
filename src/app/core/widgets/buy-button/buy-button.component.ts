import {Component, OnInit, Input} from '@angular/core';
import {Book} from "../../model/book.model";
import {ActionService} from "../../services/action.service";

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  @Input() book: Book;

  constructor(public actionService: ActionService) { }

  ngOnInit() {
  }

}
