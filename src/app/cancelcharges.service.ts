import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CancelchargesService {
  
    private baseUrl = 'http://13.233.194.50:8111/cancelletion/charges';
  
    constructor(private http: HttpClient) { }
  
    getCancel(id: number): Observable<Object> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    createCancel(cancel: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, cancel);
    }
  
    updateCancel(id: number, cancel: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, cancel);
    }
  
    deleteCancel(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  
    getCancelList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
  }
  