import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content ion-card-title')).getText();
  }

  getList() {
    return element(by.deepCss('app-root ion-content ion-list')).isDisplayed();
  }
}
