import { EmailControl } from './controls/email-control';
import { PasswordControl } from './controls/password-control';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginPresenter {

  public emailControl = new EmailControl();
  public passwordControl = new PasswordControl();

  constructor() {}

  public get isLoginValid() {
    const emailValid = this.emailControl.valid;
    const passValid = this.passwordControl.valid;
    return emailValid && passValid;
  }

  public changeLoginEmail(email: string) {
    this.emailControl.setValue(email);
  }

  public changeLoginPassword(password: string) {
    this.passwordControl.setValue(password);
  }

  public touchLoginEmail() {
    this.emailControl.markAsTouched();
  }

  public touchLoginPassword() {
    this.passwordControl.markAsTouched();
  }
}
