import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocks-dashboard',
  templateUrl: './stocks-dashboard.component.html',
  styleUrl: './stocks-dashboard.component.less'
})
export class StocksDashboardComponent {
  stocks: any[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    // Fetch stocks data from the service
    this.stockService.getRealTimeStockData().subscribe((stocks) => {
      this.stocks = stocks;
    });
    // Subscribe to real-time updates
    this.stockService.getStockUpdates().subscribe(update => {
      // Update stock data based on real-time updates
      const index = this.stocks.findIndex(stock => stock.symbol === update.symbol);
      if (index !== -1) {
        this.stocks[index].currentPrice = update.price;
      }
    });
  }
}
