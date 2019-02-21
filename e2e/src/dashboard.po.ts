import { browser, by, element } from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/dashboard');
  }
  getModulesElements() {
    return element.all(by.css('.module.hero'));
  }
  getFirstModuleElement() {
    return element.all(by.css('.module.hero')).first();
  }
  clickFirstModuleElement() {
    const el = this.getFirstModuleElement();
    el.click();
  }
  getCurrentRoute() {
    return browser.getCurrentUrl();
  }
}
