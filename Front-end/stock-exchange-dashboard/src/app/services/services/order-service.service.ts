import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private apiUrl = 'http://localhost:5209/api/Order'; 
  private apiUrl2 = `${environment.apiUrl}/Order/orders`;

  constructor(private http: HttpClient, private authService: AuthService) { }


  createOrder(orderData: any): Observable<any> {
    const headers = this.createHeaders();

    return this.http.post(`${this.apiUrl}/addorder`, orderData, { headers });
  }
  // Get user's order history
  getOrders(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    return this.http.get<any[]>(`${this.apiUrl}/orders`, { headers });
  }

  private createHeaders(): HttpHeaders {
    const authToken = this.authService.getAuthToken();  // Use AuthService to get the token
    return new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    });
  }
}
