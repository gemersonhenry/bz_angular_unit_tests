import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './views/sing-in/sing-in.component';
import { RegisterComponent } from './views/register/register.component';
import { RecoverPasswordComponent } from './views/recover-password/recover-password.component';
import { WellcomeComponent } from './views/wellcome/wellcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sing-in',
    pathMatch: 'full',
  },
  {
    path: 'sing-in',
    component: SingInComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent,
  },
  {
    path: 'wellcome',
    component: WellcomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
