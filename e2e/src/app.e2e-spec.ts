import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have an add todo form', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Add a todo');
  });

  it('should have a list', () => {
    page.navigateTo();
    expect(page.getList()).toBeDefined();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
