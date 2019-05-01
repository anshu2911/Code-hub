import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './user.model';

@Injectable()
export class UserService {
  baseUrl = 'https://api.github.com';
  _searchUser = <BehaviorSubject<IUsers>>new BehaviorSubject({});

  constructor(private http: HttpClient) { }

  get searchUser() {
    return this._searchUser.asObservable();
  }

  getUsers(queryParam) {
    return this.http.get<IUsers>(this.baseUrl + '/search/users?q=' + queryParam).subscribe(data => {
      this._searchUser.next(data);
    });
  }

  getUser(user) {
    return this.http.get(this.baseUrl + '/users/' + user + '/repos');
  }
}
