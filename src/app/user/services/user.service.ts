import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Users} from '../../../models/User';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = 'https://training.gemvietnam.com/dummy-api/users.json';
  getUsers(): Observable <Users[]> {
        return this
            .http
            .get<Users[]>(this.url).pipe(
                tap(receivedUser => console.log(`resUser = ${JSON.stringify(receivedUser)}`)),
                catchError(error => of([])) );
  }
  U
}
