export class AiGraphPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ai-graph-app h1')).getText();
  }
}
