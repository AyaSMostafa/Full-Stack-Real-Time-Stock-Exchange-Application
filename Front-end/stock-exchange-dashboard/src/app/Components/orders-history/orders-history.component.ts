import { Component , OnInit} from '@angular/core';
import { OrderServiceService } from '../../services/services/order-service.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrl: './orders-history.component.css'
})
export class OrdersHistoryComponent {
  orders: any[] = [];

  constructor(private orderService: OrderServiceService) { }

  ngOnInit(): void {
    this.loadOrdersHistory();
  }

  private loadOrdersHistory(): void {
    this.orderService.getOrders().subscribe(
      (data: any) => {
        if (data && data.$values) {
          this.orders = data.$values;
          console.log(data);
        } else {
          // Handle the case where $values is undefined or null
          this.orders = data;
        }
      },
      (error) => {
        console.error('Error loading orders history:', error);
      }
    );
  }
}
