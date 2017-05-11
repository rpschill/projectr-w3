import { ProjectrPage } from './app.po';

describe('projectr App', () => {
  let page: ProjectrPage;

  beforeEach(() => {
    page = new ProjectrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
