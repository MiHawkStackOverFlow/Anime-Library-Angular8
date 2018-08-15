import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path:string) {
    return browser.get('/' + path);
  }

  getParagraphText() {
    return element(by.css('app-header h1')).getText();
  }

  getAnimeListLink() {
    return element(by.css('[routerlink="/anime-list"]'));
  }

  getAnimeListHeaderText() {
    return element(by.css('app-anime-list h1')).getText();
  }
}
