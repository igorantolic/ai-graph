import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AuthHelperService } from './auth-helper.service';

describe('AuthHelper Service', () => {
  beforeEachProviders(() => [AuthHelperService]);

  it('should ...',
      inject([AuthHelperService], (service: AuthHelperService) => {
    expect(service).toBeTruthy();
  }));
});
