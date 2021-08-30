import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHTENTICATED_USER = 'authenticatedUser';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }


  executeJWTAuthenticationService
    (username, password) {

    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password

      })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHTENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHTENTICATED_USER)
   
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN)

  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHTENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHTENTICATED_USER)
    sessionStorage.removeItem(TOKEN)

  }
}
