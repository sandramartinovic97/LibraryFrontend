import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<User>(null);
  constructor(private httpClient: HttpClient) { }

  getUserByToken() {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token != null) {
      return this.httpClient.get<User>('http://localhost:8083/customer/token', { headers: new HttpHeaders().set('Authorization', token) });
    }
  }

  emitUser(user: User) {
    this.user.next(user);
  }

  getLoggedInUser() {
    return this.user.asObservable();
  }

  registerUser(user: User) {
    return this.httpClient.post('http://localhost:8083/customer/register', user)
  }
}
