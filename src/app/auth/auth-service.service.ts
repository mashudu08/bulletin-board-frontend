import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token!: string;

  constructor(private http: HttpClient) { }
  
  register(userusername: string, userpassword: string)
  {
    this.http.post('http://localhost:3000/api/users/register', {username:userusername, password:userpassword})
    .subscribe(response =>{
    });
  }

  login(userusername: string, userpassword: string)
  {
    this.http.post<{token: string}>('http://localhost:3000/api/users/login', {username:userusername, password:userpassword})
    .subscribe(response =>{
      const token = response.token;
      this.token = token;
    });
  }

  getToken(){
    return this.token;
  }
}
