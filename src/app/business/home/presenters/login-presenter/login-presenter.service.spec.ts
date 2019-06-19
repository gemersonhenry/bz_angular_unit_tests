import { TestBed } from '@angular/core/testing';

import { LoginPresenterService } from './login-presenter.service';
import { EMAIL_ERROR_MESSAGES, PASSWORD_ERROR_MESSAGES } from './controls/login-error-messages';

describe('LoginPresenterService', () => {
  let loginPresenterService: LoginPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginPresenterService,
      ]
    });
    loginPresenterService = TestBed.get(LoginPresenterService);
  });

  it('Instance should be created (mainly it has a loginForm)', () => {
    expect(loginPresenterService).toBeTruthy();
  });

  it('loginForm attribute is initially invalid', () => {
    const { loginForm } = loginPresenterService;
    expect(loginForm.valid).toBeFalsy();
  });

  it('emailControl attribute is initially invalid', () => {
    const { emailControl } = loginPresenterService;
    expect(emailControl.valid).toBeFalsy();
  });

  it('passwordControl attribute is initially invalid', () => {
    const { passwordControl } = loginPresenterService;
    expect(passwordControl.valid).toBeFalsy();
  });

  it('after running touchLoginEmail an errorMessage should appear (in empty control)', () => {
    const { emailControl } = loginPresenterService;
    const { required } = EMAIL_ERROR_MESSAGES;
    loginPresenterService.touchLoginEmail();
    expect(emailControl.errorMessage).toBe(required);
  });

  it('after running touchLoginPassword an errorMessage should appear (in empty control)', () => {
    const { passwordControl } = loginPresenterService;
    const { required } = PASSWORD_ERROR_MESSAGES;
    loginPresenterService.touchLoginPassword();
    expect(passwordControl.errorMessage).toBe(required);
  });

  it('after entering an email in changeLoginEmail, emailControl should be valid', () => {
    const { emailControl } = loginPresenterService;
    loginPresenterService.changeLoginEmail('email');
    expect(emailControl.valid).toBeTruthy();
  });

  it('after entering an password in changeLoginPassword, passwordControl should be valid', () => {
    const { passwordControl } = loginPresenterService;
    loginPresenterService.changeLoginPassword('password');
    expect(passwordControl.valid).toBeTruthy();
  });

  it(`after entering email and password in changeLoginEmail and changeLoginPassword, loginForm should be valid`, () => {
    const { loginForm } = loginPresenterService;
    loginPresenterService.changeLoginEmail('email');
    loginPresenterService.changeLoginPassword('password');
    expect(loginForm.valid).toBeTruthy();
  });
});
