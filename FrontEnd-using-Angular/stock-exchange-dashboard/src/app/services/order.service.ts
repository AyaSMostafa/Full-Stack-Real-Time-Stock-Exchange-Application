// order.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:5209/api/stocks';  // Update with your API endpoint

  constructor(private http: HttpClient) {}

  createOrder(orderData: any): Observable<any> {
    // Implement your logic to create an order on the server
    return this.http.post(`${this.apiUrl}/create-order`, orderData);
  }

  getOrdersHistory(): Observable<any> {
    // Implement your logic to fetch orders history from the server
    return this.http.get(`${this.apiUrl}/orders-history`);
  }
}
