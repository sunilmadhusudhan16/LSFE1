import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })

  export class stocktypedropdownservice
    {
        private baseUrl = 'http://13.233.194.50:8111/stocktype/type';

        constructor(private http: HttpClient) { }
         getAllType(): Observable<any>
            {
            return this.http.get(`${this.baseUrl}`);
            }

    }