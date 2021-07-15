import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseSite = 'https://contact-back.herokuapp.com/'
  public isLoggedIn = false
  public token = null

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseSite}register`, data)
  }
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseSite}login`, data)
  }
  contacts():Observable<any>{
    return this.http.get(`${this.baseSite}contacts`)
  }
}
