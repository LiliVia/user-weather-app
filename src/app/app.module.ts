import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { UserComponent } from './user/user.component';
import { WeatherComponent } from './weather/weather.component';
import { UsersComponent } from './users/users.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
    WeatherComponent,
    UsersComponent,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
