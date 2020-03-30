import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { SharedModule } from '../shared/shared.module';
import { UserListComponent} from './users/user-list/user-list.component';
import { UserRoleComponent } from './user_role/user-role.component';
import { RoleComponent } from './roles/role.component';
import { PermissionComponent } from './permissions/permission.component';
import { RolePermissionComponent } from './role_permissions/role-permission.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([

      // { path: '', component: UserListComponent },
      // { path: 'users', component: UserListComponent },
      { path: 'users',
        data: { preload: false },
        loadChildren: () =>
          import('./users/manage-user.module').then(m => m.ManageUserModule)},
          { path: '', redirectTo: 'users', pathMatch: 'full' },
      // { path: 'userroles', component: UserRoleComponent },
      // { path: 'roles', component: RoleComponent },
      // { path: 'permissions', component: PermissionComponent },
      // { path: 'rolepermissions', component: RolePermissionComponent }
      // { path: '', component: UserListComponent },
      // { path: '**', redirectTo: 'admin/users', pathMatch: 'full' }
    ])
  ],
  declarations: [
  ]
})
export class AdminModule { }
