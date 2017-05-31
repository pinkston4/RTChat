import { PeerjsChatPage } from './app.po';

describe('peerjs-chat App', () => {
  let page: PeerjsChatPage;

  beforeEach(() => {
    page = new PeerjsChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
