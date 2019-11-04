import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = 'http://13.233.194.50:8111/rolepermission/roles';

  constructor(private http: HttpClient) { }

  getRole(roleid: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${roleid}`);
  }

  createRole(role: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, role);
  }

  updateRole(roleid: number, role: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${roleid}`, role);
  }

  deleteRole(roleid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${roleid}`, { responseType: 'text' });
  }

  getRolesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
