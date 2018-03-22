import { TestBed, inject } from '@angular/core/testing';

import { ActionService } from './action.service';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { book1 } from '../model/book.model.spec';
import Spy = jasmine.Spy;



describe('ActionService', () => {
  let action: ActionService;
  let cart: CartService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActionService,
        {provide: CartService, useValue: jasmine.createSpyObj(['add'])},
        {provide: Router, useValue: jasmine.createSpyObj(['navigate'])}
        // { si besoin de retourner des valeurs
        //   provide: Router,
        //   useFactory: () => {
        //     const  srv = jasmine.createSpyObj(['navigate']);
        //     srv.navigate.and.returnValue(Promise.resolve(true));
        //     return srv;
        //   }
        // }
      ]
    });
  });
  beforeEach(() => {
    action = TestBed.get(ActionService);
    cart = TestBed.get(CartService);
    router = TestBed.get(Router);
    // spyOn(cart, 'add');
    // spyOn(router, 'navigate');
  });

  it('should be created', () => {
    expect(action).toBeTruthy();
  });

  it('should add book', () => {
    action.addToCart(book1);
    expect(cart.add).toHaveBeenCalled();
    expect(cart.add).toHaveBeenCalledTimes(1);
    expect(cart.add).toHaveBeenCalledWith(book1, 1);
    expect(router.navigate).toHaveBeenCalled();
    expect(cart.add).toHaveBeenCalledBefore(router.navigate as Spy);
  });
});
