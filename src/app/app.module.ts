import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
