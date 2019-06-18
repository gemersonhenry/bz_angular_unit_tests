import { EmailControl } from './controls/email-control';
import { PasswordControl } from './controls/password-control';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class LoginPresenter {

  public loginForm = new FormGroup({
    emailControl: new EmailControl(),
    passwordControl: new PasswordControl(),
  });

  constructor() {}

  public get emailControl() {
    return this.loginForm.get('emailControl');
  }

  public get passwordControl() {
    return this.loginForm.get('passwordControl');
  }

  public get isValidForm() {
    return this.loginForm.valid;
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
