import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIndexComponent } from './users/user-index/user-index.component';
import { UserShowComponent } from './users/user-show/user-show.component';

const routes: Routes = [
  { path: 'users', component: UserIndexComponent },
  { path: 'users/:id', component: UserShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
