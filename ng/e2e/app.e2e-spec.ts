import { ListpagePage } from './app.po';

describe('listpage App', () => {
  let page: ListpagePage;

  beforeEach(() => {
    page = new ListpagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
