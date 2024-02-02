import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderServiceService } from '../../services/services/order-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrl: './order-creation.component.css'
})
export class OrderCreationComponent {
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private orderService: OrderServiceService, private router: Router) {
    this.orderForm = this.formBuilder.group({
      stockSymbol: ['', Validators.required],
      orderType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.value;
      this.orderService.createOrder(orderData).subscribe(
        createdOrder => {
          console.log('Order created successfully:', createdOrder);
          this.router.navigate(['/orders-history']);
          // Optionally: Refresh orders history or perform other actions
        },
        error => {
          console.error('Error creating order:', error);
        }
      );
    }
  }
}
