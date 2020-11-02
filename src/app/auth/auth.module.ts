import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {RecaptchaModule} from 'angular-google-recaptcha';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RecaptchaModule.forRoot({
      siteKey: '6LcYqcEUAAAAAAOjgEZHR7UTEf9tQvuUsiPCifUb',
    }),
    FormsModule
  ]
})
export class AuthModule { }
