import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrl: './order-creation.component.less'
})
export class OrderCreationComponent {
  order: any = {};

  constructor(private orderService: OrderService) {}

  onSubmit(): void {
    // Submit the order using the order service
    this.orderService.createOrder(this.order).subscribe(() => {
      // You can implement further logic after the order is created
      console.log('Order created successfully!');
    });
  }
}
