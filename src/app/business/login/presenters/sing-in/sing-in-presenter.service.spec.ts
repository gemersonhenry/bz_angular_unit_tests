import { TestBed } from '@angular/core/testing';

import { SingInPresenterService } from './sing-in-presenter.service';

describe('SingInPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingInPresenterService = TestBed.get(SingInPresenterService);
    expect(service).toBeTruthy();
  });
});
