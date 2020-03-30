import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';


import { UserEntity } from 'src/app/model/user-entity';
import { UserService } from 'src/app/service/user/user.service';
import { MessageService } from 'src/app/messages/message.service';
import { UserResolved } from '../user-resolved';

// import { AuthService } from './auth.service';

@Component({
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {
  errorMessage: string;
  pageTitle = 'Update User: ${{user.userName}}';
  private dataIsValid: { [key: string]: boolean } = {};

  get isDirty(): boolean {
    return JSON.stringify(this.originalUser) !== JSON.stringify(this.currentUser);
  }

  private currentUser: UserEntity;
  private originalUser: UserEntity;
  private isAllowDelete = true;

  get user(): UserEntity {
    return this.currentUser;
  }
  set user(value: UserEntity) {
    this.currentUser = value;
    // Clone the object to retain a copy
    this.originalUser = value ? { ...value } : null;
  }

  get allowDelete(): boolean {
    return this.isAllowDelete;
  }

  set allowDelete(value: boolean) {
    this.isAllowDelete = value;
  }

  constructor(private userService: UserService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const resolvedData: UserResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onUserRetrieved(resolvedData.user);
    });
  }
  onUserRetrieved(user: UserEntity): void {
    this.user = user;

    if (!this.user) {
      this.pageTitle = 'No user found';
    } else {
      if (this.user.id === 0) {
        this.pageTitle = 'Add New User';
        this.allowDelete = false;
      } else {
        this.pageTitle = `Edit User: ${this.user.userName}`;
      }
    }
  }

  deleteUser(): void {
    if (this.user.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.user.userName} was deleted`);
    } else {
      if (confirm(`Really delete the user: ${this.user.userName}?`)) {
        this.userService.deleteUser(this.user.id).subscribe({
          next: () => this.onSaveComplete(`${this.user.userName} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }

  isValid(path?: string): boolean {
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (this.dataIsValid &&
      Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
  }

  reset(): void {
    this.dataIsValid = null;
    this.currentUser = null;
    this.originalUser = null;
  }

  saveUser(): void {
    if (this.isValid()) {
      if (this.user.id === 0) {
        this.userService.createUser(this.user).subscribe({
          next: () => this.onSaveComplete(`The new ${this.user.userName} was saved`),
          error: err => this.errorMessage = err
        });
      } else {
        this.userService.updateUser(this.user).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.user.userName} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.reset();

    // Navigate back to the product list
    this.router.navigate(['admin/users']);
  }

  validate(): void {
    // Clear the validation object
    this.dataIsValid = {};
    if (this.user.userName && this.user.userName.length >= 6 && this.user.emailId) {
      this.dataIsValid['user'] = true;
    } else {
      this.dataIsValid['user'] = false;
    }
  }

}
