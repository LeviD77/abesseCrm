import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIndexComponent } from './users/user-index/user-index.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'users',
    component: UserIndexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/:id',
    component: UserShowComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
