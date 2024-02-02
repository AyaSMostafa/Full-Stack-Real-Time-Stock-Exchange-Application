// stock.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'http://localhost:5209/api/stocks';  // Update with your API endpoint


  constructor(private http: HttpClient) {}

  getRealTimeStockData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stocks`);
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
}
