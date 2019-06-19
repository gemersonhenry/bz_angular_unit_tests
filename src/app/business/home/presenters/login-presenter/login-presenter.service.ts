import { FormGroup } from '@angular/forms';
import { EmailControl } from './controls/email-control';
import { PasswordControl } from './controls/password-control';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginPresenterService {

  public loginForm = new FormGroup({
    emailControl: new EmailControl(),
    passwordControl: new PasswordControl(),
  });

  constructor() {
    this.emailControl.setValue('');
    this.passwordControl.setValue('');
  }

  public get emailControl() {
    return this.loginForm.get('emailControl') as EmailControl;
  }

  public get passwordControl() {
    return this.loginForm.get('passwordControl') as PasswordControl;
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
