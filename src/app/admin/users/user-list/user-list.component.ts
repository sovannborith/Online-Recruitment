import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserEntity } from '../../../model/user-entity';
import { UserService } from '../../../service/user/user.service';


@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['../../admin.component.css']
})
export class UserListComponent implements OnInit {
  errorMessage: string;
  pageTitle = 'Manage User';

  _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
  }

  filteredUsers: UserEntity[] = [];
  users: UserEntity[] = [];
  constructor(private route: ActivatedRoute,
              private userService: UserService
              ) {

    }

  ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    this.userService.getUsers().subscribe({
        next: users => {
        this.users = users;
        this.filteredUsers = this.performFilter(this.listFilter);
        },
        error: err => this.errorMessage = err
      });
    }
    performFilter(filterBy: string): UserEntity[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.users.filter((user: UserEntity) =>
        user.userName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
