import { Ng4coursePage } from './app.po';

describe('ng4course App', function() {
  let page: Ng4coursePage;

  beforeEach(() => {
    page = new Ng4coursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
