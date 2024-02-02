import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StockServiceService } from '../../services/services/stock-service.service';

@Component({
  selector: 'app-stocks-dashboard',
  templateUrl: './stocks-dashboard.component.html',
  styleUrl: './stocks-dashboard.component.css'
})
export class StocksDashboardComponent {
  stocks: any[] = [];

  constructor(private stockService: StockServiceService) { }


  ngOnInit(): void {
    this.loadRealTimeStockData();
  }

  private loadRealTimeStockData(): void {
      this.stockService.getRealTimeStockData().subscribe(
        (data: any) => {
          if (data && data.$values) {
            this.stocks = data.$values;
          } else {
            // Handle the case where $values is undefined or null
            this.stocks = [];
          }
        },
        (error) => {
          console.error('Error fetching stocks', error);
        }
      );
  }
}
export interface Stock {
  symbol: number;
  name: string;
  currentPrice: number;
  timestamp: string;
  orders: any[]; // You might need to define the type of orders
}