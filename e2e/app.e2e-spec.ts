import { AppPage } from './app.po';
import { CatalogPage } from './catalog.po';
import { CartPage } from './cart.po';
import { browser } from 'protractor';

describe('bookstore App', () => {
  const appPage = new AppPage();
  const catalogPage = new CatalogPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    appPage.navigateTo();
  });

  it('should display welcome message', () => {
    expect(appPage.getTitleText()).toEqual('Bookstore');
    //expect gère la promesse tout seul
    // appPage.getTitleText().then(text => {
    //   expect(text).toEqual('Bookstore');
    // });
  });

  it('should display a list of more than 10 books', () => {
    expect(catalogPage.getRowsCount()).toBeGreaterThan(10);
  });

  // fit('should add books to cart', () => { ajouter le f permet de tester uniquement ce "it"
  fit('should add books to cart', () => {
    browser.sleep(15000);
    catalogPage.buyBookOnRow(0);
    expect(cartPage.getRowsCount()).toEqual(1);
    const author = cartPage.getTextOnRow(0, '.cart-author');
    expect(author).toContain('Alain');
    const quantity = cartPage.getOnRow(0, '.cart-quantity input').getAttribute('value').then((text) => +text);
    expect(quantity).toEqual(1);

    appPage.clickOnMenu('CATALOGUE');
    catalogPage.buyBookOnRow(1);
    expect(cartPage.getRowsCount()).toEqual(2);

    const lastRowAmount = cartPage.getOnRow(1, '.cart-amount');
    expect(lastRowAmount.getText()).toEqual('9,90 €');
    const lastRowQuantity = cartPage.getOnRow(1, '.cart-quantity input');
    lastRowQuantity.clear();
    lastRowQuantity.sendKeys('3');
    expect(lastRowAmount.getText()).toEqual('29,70 €');
  });
});
