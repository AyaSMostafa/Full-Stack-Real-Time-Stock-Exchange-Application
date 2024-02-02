import { Component , OnInit} from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // Fetch orders history from the order service
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }
}
