import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stat } from '../AdminCharts/dashboard.model'; // Assuming you have a Stat model

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //http://localhost:8093/GestionUser/users/getPendingAccessRequests/{{role}}
  private apiUrls = 'http://localhost:8093/GestionUser/users/count';
  private apiUrl = 'http://localhost:8093/GestionUser/';


  constructor(private http: HttpClient) {}

  getStats(): Observable<Stat[]> {
    return this.http.get<Stat[]>(this.apiUrls);
  }

  getPendingAccessRequests(role: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/getPendingAccessRequests/${role}`);
  }
  requestAdminAccess(userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/requestAdminAccess`, { userId });
  }
}
