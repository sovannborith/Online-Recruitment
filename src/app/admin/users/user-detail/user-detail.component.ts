import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

import { UserEntity } from '../../../model/user-entity';
import { UserService } from '../../../service/user/user.service';
import { UserResolved } from '../user-resolved';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['../../admin.component.css']
})
export class UserDetailComponent implements OnInit {
  errorMessage: string;
  pageTitle = 'User Details';
  user: UserEntity;
  constructor(private route: ActivatedRoute
              ) {

    }

  ngOnInit(): void {
    const resolvedData: UserResolved =
      this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onUserRetrieved(resolvedData.user);
  }

  onUserRetrieved(user: UserEntity): void {
    this.user = user;

    if (this.user) {
      this.pageTitle = `User Detail: ${this.user.userName}`;
    } else {
      this.pageTitle = 'No user found';
    }
  }
}
