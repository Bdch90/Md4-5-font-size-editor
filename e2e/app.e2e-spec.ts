import { FontSizeEditorPage } from './app.po';

describe('font-size-editor App', function() {
  let page: FontSizeEditorPage;

  beforeEach(() => {
    page = new FontSizeEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
