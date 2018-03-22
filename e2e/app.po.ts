import { browser, By, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(By.css('app-root h1')).getText();
  }

  clickOnMenu(linkText: string) {
    return element(By.tagName('app-menu')).element(By.linkText(linkText)).click();
  }
}
