import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'authentication',
        data: { preload: false },
        loadChildren: () =>
          import('./auth/auth.module').then(m => m.AuthModule)},
      { path: 'admin',
        data: { preload: false },
        loadChildren: () =>
          import('./admin/admin.module').then(m => m.AdminModule)},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], { enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
