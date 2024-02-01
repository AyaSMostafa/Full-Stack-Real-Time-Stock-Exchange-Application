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

  getStocks(): Observable<any> {
    // Implement your logic to fetch stocks from the server
    return this.http.get(`${this.apiUrl}/stocks`);
  }

  getRealTimeUpdates(): Observable<any> {
    // Implement your logic to get real-time updates for stocks
    return this.http.get(`${this.apiUrl}/real-time-updates`);
  }
}
