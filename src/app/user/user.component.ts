import { Component, Input, OnInit } from '@angular/core';

import {concatMap, map, tap} from 'rxjs';

import { UserService } from './user.service';
import { User } from './user';
import { Weather } from '../weather/weather';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User[] = [];
  weather!: Weather;
  weatherIsLoaded = false;
  @Input() isUsersList = false;
  @Input() set users(data: User[]){
    this.user = data;
  }
  userIsSaved = false;


  constructor(private userService: UserService) {}

  ngOnInit() {
    if (!this.isUsersList) {
      this.getUser();
    } 
  }

  getUser() {
    this.userService.getUser()
      .pipe(
        map (resp => resp.results),
        tap (user => {this.user = user}),
        concatMap((user) => this.userService.getWeather(user[0].location)),
        // tap((result) => {console.log(result); this.weatherIsLoaded = true}),
        tap((result: Weather) => {
          this.weather = result;
          this.user[0].weather = result;
        }),
      )
      .subscribe();
  }

  saveUser(user: User) {
    this.userService.addUserToStorage(user);
    this.userIsSaved = true;
  }

}
