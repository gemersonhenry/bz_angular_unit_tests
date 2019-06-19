import { Component, OnInit } from '@angular/core';
import { LoginPresenterService } from '../../presenters/login-presenter/login-presenter.service';

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
    private loginPresenter: LoginPresenterService,
  ) { }

  ngOnInit() {
  }

  loginRememberChanged() {
    console.log('loginRememberChanged');
  }

  otherEvent() {
    console.log('otherEvent');
  }

}
