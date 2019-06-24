import { TestBed } from '@angular/core/testing';

import { RegisterPresenterService } from './register-presenter.service';

describe('RegisterPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterPresenterService = TestBed.get(RegisterPresenterService);
    expect(service).toBeTruthy();
  });
});
