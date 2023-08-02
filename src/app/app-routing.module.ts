import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-forecast', pathMatch: 'full' },
  { path: 'user-forecast', component: UserComponent },
  { path: 'users-list', component: UsersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
