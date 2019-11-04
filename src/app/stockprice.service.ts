import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StockpriceService {

  private baseUrl = 'http://13.233.194.50:8111/stockprice/stocks';

  constructor(private http: HttpClient) { }

  getStock(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStock(stock: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stock);
  }

  updateStock(id: number, stock: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, stock);
  }

  deleteStock(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStockList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
