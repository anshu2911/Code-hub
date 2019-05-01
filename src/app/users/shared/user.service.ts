import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './user.model';

@Injectable()
export class UserService {
  baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUsers(queryParam): Observable<IUsers> {
    return this.http.get<IUsers>(this.baseUrl + '/search/users?q=' + queryParam);
  }

  getUser(user) {
    return this.http.get(this.baseUrl + '/users/' + user + '/repos');
  }
}
