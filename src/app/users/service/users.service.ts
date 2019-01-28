import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {Observable} from "rxjs";

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }
}
