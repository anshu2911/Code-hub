import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UsersAppComponent } from './users-app.component';


@NgModule({
  declarations: [
    UsersAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UsersAppComponent]
})
export class AppModule { }
