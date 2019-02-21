import { browser } from 'protractor';
import { DashboardPage } from './dashboard.po';
describe('dashboard view', function () {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it('should display a list of heroes', () => {
    page.navigateTo();
    expect(page.getModulesElements().count()).toBe(4);
  });

  it('should go to hero detail page', () => {
    page.clickFirstModuleElement();
    expect(page.getCurrentRoute()).toBe('http://localhost:4300/detail/12');
  });

});
