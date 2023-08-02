import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Location, User } from '../user/user';
import { Weather } from '../weather/weather';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private randomUserUrl = 'https://randomuser.me/api/';  // URL to random user api
  private weatherUrl = 'https://api.open-meteo.com/v1/forecast';  // URL to random user api
  private handleError: HandleError;
  user: User[] = [];

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  
  /** GET user from the server */
  getUser(): Observable<any> {
    return this.http.get<User[]>(this.randomUserUrl)
      .pipe(
        catchError(this.handleError('getUser', []))
      );
  }

  /* GET weather for user location */
  getWeather(location: Location): Observable<Weather> {
    const coords = `latitude=${location.coordinates.latitude}&longitude=${location.coordinates.longitude}`;
    const query = coords +`&current_weather=true&hourly=temperature_2m`
    const params = new HttpParams({fromString: query});

    return this.http.get<Weather>(this.weatherUrl, { params })
      .pipe(
        catchError(this.handleError<Weather>('GetForecast'))
      );
  }

  /** add a new user to the LocalStorage */
  addUserToStorage(user: User) {
    this.user = [user];
    let users = this.getSavedUsers();
    users = users.concat(this.user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  /** clear all users from the LocalStorage */
  clearUsers() {
    localStorage.removeItem('users');
  }


  /** get users from the LocalStorage */
  getSavedUsers(): User[] {
    const users = localStorage.getItem('users')
    return users ? JSON.parse(users) : [];
  }

}
