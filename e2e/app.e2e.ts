import { AiGraphPage } from './app.po';

describe('ai-graph App', function() {
  let page: AiGraphPage;

  beforeEach(() => {
    page = new AiGraphPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ai-graph works!');
  });
});
