import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'user-forecast',
    component: UserComponent
  },
  {
    path: 'users-list',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  { 
    path: '', 
    redirectTo: '/user-forecast', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
