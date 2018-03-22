import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContentComponent } from './cart-content.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component, Directive, Input } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { book1, book2 } from '../../core/model/book.model.spec';
import { CartRow } from '../../core/model/cart-row';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-order-button',
  template: '<br>'
})
class OrderButtonMockComponent {}

@Directive({
  selector: '[routerLink]',

})
class RouterLinkMockDirective {
  @Input() routerLink: string[];
}

fdescribe('CartContentComponent', () => {
  let component: CartContentComponent;
  let fixture: ComponentFixture<CartContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        CartContentComponent,
        OrderButtonMockComponent,
        RouterLinkMockDirective
      ],
      providers: [
        CartService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display CartRows', (done) => {
    const cart: CartService = TestBed.get(CartService);
    cart.rows = [
      new CartRow(book1, 1),
      new CartRow(book2, 2)
    ];
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('.cart-row'));
    const title1 = rows[1].query(By.css('.cart-title'));
    expect(title1.nativeElement.textContent).toEqual('B2');
    fixture.whenStable().then(() => {
      const quantity1 = rows[1].query(By.css('.cart-quantity.title'));
      expect(quantity1.nativeElement.value).toEqual(2);
      done();
    });
  })

});
