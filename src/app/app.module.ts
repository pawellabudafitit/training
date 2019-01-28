import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/components/users.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import {UsersModule} from "./users/users.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatToolbarModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
