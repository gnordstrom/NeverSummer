import { NeversummerPage } from './app.po';

describe('neversummer App', function() {
  let page: NeversummerPage;

  beforeEach(() => {
    page = new NeversummerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
