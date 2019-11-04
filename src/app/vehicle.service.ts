import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://13.233.194.50:8111/vehicle/price';

  constructor(private http: HttpClient) { }

  getVehicle(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVehicle(vehicle: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, vehicle);
  }

  updateVehicle(id: number, vehicle: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVehicleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
