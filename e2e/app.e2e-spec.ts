import { WurmForumsPage } from './app.po';

describe('wurm-forums App', function() {
  let page: WurmForumsPage;

  beforeEach(() => {
    page = new WurmForumsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
