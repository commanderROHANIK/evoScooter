import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserData } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserData[] = [];
  http = inject(HttpClient);

  constructor() { }

  async getAllUsers() {
    await this.http.get("http://localhost:3000/users").subscribe((data: any) => {
      this.users = data;
    });

    return this.users;
  }

  async createUser(user: UserData) {
    await this.http.post<UserData>("http://localhost:3000/users", user, ).subscribe((data: any) => {
      this.users.push(data);
    });
  }
}
