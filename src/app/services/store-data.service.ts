import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreItem } from '../interfaces/store-item';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor(private http: HttpClient) { }

  getItems (): Observable<StoreItem[]> {
    return this.http.get<StoreItem[]>(`${environment.API_URL}/api/store/items`)
  }
}