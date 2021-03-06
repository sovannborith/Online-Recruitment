import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// import { AuthService } from './auth.service';

@Component({
  templateUrl: './forget-password.component.html',
  styleUrls: ['../user.component.css']
})
export class ForgetPasswordComponent {
  errorMessage: string;
  pageTitle = 'Recover Your Password';

  constructor(// private authService: AuthService,
              private router: Router) { }
  logIn() {
    this.router.navigateByUrl('/authentication');
  }


              /*
  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
  */
}
