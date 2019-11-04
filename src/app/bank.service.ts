import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  private baseUrl = 'http://13.233.194.50:8111/bankservice/banks';

  constructor(private http: HttpClient) { }

  getBank(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBank(bank: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bank);
  }

  updateBank(id: number, bank: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, bank);
  }

  deleteBank(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBanksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
