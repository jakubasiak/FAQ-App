import { FaqappPage } from './app.po';

describe('faqapp App', function() {
  let page: FaqappPage;

  beforeEach(() => {
    page = new FaqappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
