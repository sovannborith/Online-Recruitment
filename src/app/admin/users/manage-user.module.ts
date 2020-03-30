import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './user-edit/edit-user.component';
import { UserResolver } from 'src/app/service/user/user-resolver.service';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailComponent, resolve: { resolvedData: UserResolver } },
      { path: ':id/edit', component: EditUserComponent , resolve: { resolvedData: UserResolver }}
    ])
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    EditUserComponent
  ]
})
export class ManageUserModule { }
