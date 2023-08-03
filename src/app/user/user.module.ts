import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { WeatherModule } from '../weather/weather.module';


@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    WeatherModule,
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
