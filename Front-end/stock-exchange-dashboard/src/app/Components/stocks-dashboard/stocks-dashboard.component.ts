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
      data => {
        this.stocks = data;
      },
      error => {
        console.error('Error loading real-time stock data:', error);
      }
    );
  }
}
