import { ListPage } from './list.po';

export class CatalogPage extends ListPage {
  protected getRowCssClass() {
    return '.catalog-row';
  }

  buyBookOnRow(index: number) {
    return this.getOnRow(index, '.catalog-button app-buy-button button').click();
  }
}
