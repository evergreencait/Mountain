import { StevensPassPage } from './app.po';

describe('stevens-pass App', function() {
  let page: StevensPassPage;

  beforeEach(() => {
    page = new StevensPassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
