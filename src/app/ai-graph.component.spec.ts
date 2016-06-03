import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AiGraphAppComponent } from '../app/ai-graph.component';

beforeEachProviders(() => [AiGraphAppComponent]);

describe('App: AiGraph', () => {
  it('should create the app',
      inject([AiGraphAppComponent], (app: AiGraphAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ai-graph works!\'',
      inject([AiGraphAppComponent], (app: AiGraphAppComponent) => {
    expect(app.title).toEqual('ai-graph works!');
  }));
});
