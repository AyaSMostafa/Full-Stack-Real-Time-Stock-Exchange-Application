import { Component , OnInit} from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrl: './orders-history.component.less'
})
export class OrdersHistoryComponent {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // Fetch orders history from the order service
    this.orderService.getOrdersHistory().subscribe((orders) => {
      this.orders = orders;
    });
  }
}
