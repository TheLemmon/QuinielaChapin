import { QuinielachapinaPage } from './app.po';

describe('quinielachapina App', () => {
  let page: QuinielachapinaPage;

  beforeEach(() => {
    page = new QuinielachapinaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
