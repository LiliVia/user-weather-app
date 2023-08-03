import { Component } from '@angular/core';

import { User } from '../user/user';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getSavedUsers();
    // console.log(this.users)
  }

  clearStorage() {
    this.userService.clearUsers();
    this.users = [];
  }
}
