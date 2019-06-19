import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login-form/login-form.component';
import { PresentersModule } from '../presenters/presenters.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    PresentersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginFormComponent,
  ]
})
export class ComponentsModule { }
