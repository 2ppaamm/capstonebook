import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  addUser(user: Object): Observable<User[]> {
    return this.http.post('http://localhost/users', user)
      .map((response) => response)
      .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'}));
  }

  getUsers(): Observable<User[]> {
    return this.http.get('http://localhost/users')
      .map((response) => response)
      .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'}));
  }
}
