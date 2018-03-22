import { CartRow } from './cart-row';
import { book1 } from './book.model.spec';

describe('CartRow class', () => {
  it('should compute row amount', () => {

    const row1 = new CartRow(book1, 1);
    expect(row1.amount()).toBeCloseTo(10.10, 2);

    const row2 = new CartRow(book1, 2);
    expect(row2.amount()).toBeCloseTo(20.20, 2);

    const row3 = new CartRow(book1, 3);
    expect(row3.amount()).toBeCloseTo(30.30, 2);
  });
});
