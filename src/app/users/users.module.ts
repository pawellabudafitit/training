import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersService} from "./service/users.service";
import {UsersComponent} from "./components/users.component";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material";

@NgModule({
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
