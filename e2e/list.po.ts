import { browser, By, element } from 'protractor';

export abstract class ListPage {

  protected abstract getRowCssClass(): string;

  getRows() {
    return element.all(By.css(this.getRowCssClass()));
  };

  getRowsCount() {
    return this.getRows().count();
    // la promesse à des propriété ajoutés exemple : count retourne une promesse du nombre d'elements
  }

  getOnRow(index: number, cssSelector: string) {
    return this.getRows().get(index).element(By.css(cssSelector));
  }

  getTextOnRow(index: number, cssSelector: string) {
    return this.getOnRow(index, cssSelector).getText();
  }
}
