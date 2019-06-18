import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { PresentersModule } from '../presenters/presenters.module';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PresentersModule,
  ],
  exports: [
    LoginFormComponent,
  ]
})
export class ComponentsModule { }
