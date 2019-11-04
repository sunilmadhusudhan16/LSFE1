import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class EmpRegServices {
   
  
    private baseUrl = 'http://13.233.194.50:8111/empreg/ereg';
  
    constructor(private http: HttpClient) { }
   
    createEmp(user: Object): Observable<Object> 
    {
      return this.http.post(`${this.baseUrl}`, user);
    }
    getAllEmployee(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
   
  }