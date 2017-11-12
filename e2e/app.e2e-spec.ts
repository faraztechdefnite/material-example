import { MaterialExamplesPage } from './app.po';

describe('material-examples App', () => {
  let page: MaterialExamplesPage;

  beforeEach(() => {
    page = new MaterialExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
