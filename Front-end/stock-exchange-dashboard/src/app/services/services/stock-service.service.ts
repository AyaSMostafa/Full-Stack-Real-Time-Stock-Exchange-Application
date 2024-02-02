import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  private apiUrl = 'http://localhost:5209/api/stocks'; 
  private apiUrl2 = `${environment.apiUrl}/stocks`;

  constructor(private http: HttpClient,  private authService: AuthService) { }

  getRealTimeStockData(): Observable<any[]> {
    // Include JWT token in the headers
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    console.log(headers);
    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  // Get historical stock data for a given symbol
  getStockHistory(symbol: string): Observable<any[]> {
    // Include JWT token in the headers
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getAuthToken());
    return this.http.get<any[]>(`${this.apiUrl}/${symbol}/history`, { headers });
  }

  getStockUpdates(): Observable<any> {
    // Connect to WebSocket for real-time updates
    // Example: Replace 'ws://localhost:5000/stockHub' with your actual WebSocket endpoint
    return new Observable(observer => {
      const socket = new WebSocket('ws://localhost:5209/stockHub');

      socket.addEventListener('message', event => {
        observer.next(JSON.parse(event.data));
      });

      return () => {
        socket.close();
      };
    });
  }

  // Helper function to get JWT token from localStorage
  private getToken(): string | null {
    return localStorage.getItem('token');
  }
  getStocks(): Observable<any> {
    const headers = this.createHeaders();

    return this.http.get(`${this.apiUrl}`, { headers });
  }
  private createHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('authToken');
    return new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    });
  }
}
