import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// import { AuthService } from './auth.service';

@Component({
  templateUrl: './role-permission.component.html',
  styleUrls: ['../admin.component.css']
})
export class RolePermissionComponent {
  errorMessage: string;
  pageTitle = 'Manage Role Permission';

  constructor(// private authService: AuthService,
              private router: Router) { }
  logIn() {
    this.router.navigateByUrl('/login');
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
