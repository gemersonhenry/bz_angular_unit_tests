import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginPresenter } from '../../presenters/login-presenter/login-presenter';

@Component({
  selector: 'bz-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginEmail = '';
  public loginPassword = '';
  public loginRemember = false;

  constructor(
    private loginPresenter: LoginPresenter,
  ) { }

  ngOnInit() {
    this.loginPresenter.emailControl.setValue(this.loginEmail);
    this.loginPresenter.passwordControl.setValue(this.loginPassword);
  }

  loginRememberChanged() {

  }

  otherEvent() {
    console.log('otherEvent');
  }

}
