import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forgetpassword/forget-password.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgetpassword', component: ForgetPasswordComponent },
      { path: '', component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ]
})
export class AuthModule { }
