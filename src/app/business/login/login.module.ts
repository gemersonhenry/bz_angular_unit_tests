import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SingInComponent } from './views/sing-in/sing-in.component';
import { RegisterComponent } from './views/register/register.component';
import { RecoverPasswordComponent } from './views/recover-password/recover-password.component';
import { WellcomeComponent } from './views/wellcome/wellcome.component';
import { PresentersModule } from './presenters/presenters.module';

@NgModule({
  declarations: [
    LoginComponent,
    SingInComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    WellcomeComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PresentersModule,
  ]
})
export class LoginModule { }
