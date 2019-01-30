import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersService} from "./service/users.service";
import {UsersComponent} from "./components/users.component";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule, MatInputModule, MatListModule} from "@angular/material";
import {CreateUserComponent} from './components/create-user/create-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
