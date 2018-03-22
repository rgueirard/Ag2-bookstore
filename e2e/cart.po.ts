import { ListPage } from './list.po';

export class CartPage extends ListPage {
  protected getRowCssClass() {
    return '.cart-row';
  }


}
