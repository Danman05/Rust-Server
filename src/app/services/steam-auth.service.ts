import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SteamProfile } from '../interfaces/steam-profile';

@Injectable({
  providedIn: 'root'
})
export class SteamAuthService {

  constructor(private http: HttpClient) { }

  user: SteamProfile | undefined;

  login() {
    window.location.href = `${environment.API_URL}/api/auth`
  }
  logout(): Observable<any> {
    this.user = undefined
    return this.http.get<any>(`${environment.API_URL}/api/auth/logout`);
  }
  getProfileData(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/api/auth/user`);
  }

  getUser(): SteamProfile | undefined {
    return this.user;
  }
  setUser(user: SteamProfile) {
    this.user = user;
  }
}
