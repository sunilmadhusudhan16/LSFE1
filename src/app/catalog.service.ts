import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private baseUrl = 'http://13.233.194.50:8111/catalog/type';

  constructor(private http: HttpClient) { }

  getCatalog(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCatalog(Catalog: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Catalog);
  }

  updateCatalog(id: number, Catalog: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, Catalog);
  }

  deleteCatalog(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCatalogList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // getCatalogsByName(catalogname: any): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/type/${catalogname}`);
  // }
}
