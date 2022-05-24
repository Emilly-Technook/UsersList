import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { User } from './../components/create-user/user';
import { map } from 'rxjs/operators';

const API = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(`${API}/users`);
  }
  get10Users() {
    return this.httpClient.get(`${API}/users/?_page=1&_limit=10`);
  }
  get20Users() {
    return this.httpClient.get(`${API}/users/?_page=1&_limit=20`);
  }
  get30Users() {
    return this.httpClient.get(`${API}/users/?_page=1&_limit=30`);
  }
  deleteUser(id: number) {
    return this.httpClient.delete(`${API}/users/${id}`);
  }
  createUser(body: User) {
    return this.httpClient.post(`${API}/users/`, body);
  }
  findUser(id: number) {
    return this.httpClient.get(`${API}/users/${id}`);
  }
  updateUser(user: any) {
    return this.httpClient.put(`${API}/users/${user.id}`, user);
  }

}
