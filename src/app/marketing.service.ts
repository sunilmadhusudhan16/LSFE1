import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  private baseUrl = 'http://13.233.194.50:8111/marketing/roles';

  constructor(private http: HttpClient) { }

  getRole(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRole(role: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, role);
  }

  updateRole(id: number, role: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, role);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRolesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
