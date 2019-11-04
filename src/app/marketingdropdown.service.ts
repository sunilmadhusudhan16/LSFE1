import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketingDropdownService {

  private baseUrl = 'http://13.233.194.50:8111/marketingdropdown/marketingtypes';

  constructor(private http: HttpClient) { }

  getMarketingtypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}