import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SteamAuthService {

  constructor(private http: HttpClient) { }

  login() {
    window.location.href = `${environment.API_URL}/api/auth`
  }
  logout(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/api/auth/logout`);
  }
  getProfileData(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/api/auth/user`);
  }
}
