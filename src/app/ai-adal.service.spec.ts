import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AiAdalService } from './ai-adal.service';

describe('AiAdal Service', () => {
  beforeEachProviders(() => [AiAdalService]);

  it('should ...',
      inject([AiAdalService], (service: AiAdalService) => {
    expect(service).toBeTruthy();
  }));
});
