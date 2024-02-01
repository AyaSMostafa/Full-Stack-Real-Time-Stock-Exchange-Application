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
    this.stockService.getStocks().subscribe((stocks) => {
      this.stocks = stocks;
    });
  }
}