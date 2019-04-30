import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UsersAppComponent } from './users-app.component';
import { UsersListComponent } from './users/users-list.components';
import { UserThumbnailComponent } from './users/user-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    UsersAppComponent,
    UsersListComponent,
    UserThumbnailComponent,
    NavBarComponent
  ],
  bootstrap: [UsersAppComponent]
})
export class AppModule { }
