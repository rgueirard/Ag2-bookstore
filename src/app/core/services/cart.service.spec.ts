import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import { book1, book2 } from '../model/book.model.spec';
import { CartRow } from '../model/cart-row';

describe('CartService', () => {
  let cart: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });
  beforeEach(() => {
    cart = TestBed.get(CartService);
  });

  // it('should be created', inject([CartService], (service: CartService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should be created', () => {

    expect(cart).toBeTruthy();
  });

  it('should remove a row', () => {
    cart.rows = [
      new CartRow(book1, 1),
      new CartRow(book2, 2)
    ];
    cart.remove(cart.rows[1]);
    expect(cart.rows).toEqual([
      new CartRow(book1, 1)
    ]);
    cart.remove(cart.rows[0]);
    expect(cart.rows).toEqual([]);//toEqual compare les valeur alors que toBe compare les reference
  })
});
