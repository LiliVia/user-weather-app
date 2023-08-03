import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserModule } from '../user/user.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserModule
  ]
})
export class UsersModule { }
