import { Component , OnInit} from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrl: './order-creation.component.css'
})
export class OrderCreationComponent {
  order: any = {};
  orderForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      stockSymbol: ['', Validators.required],
      orderType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }
  onSubmit(): void {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.value;
      this.orderService.createOrder(orderData).subscribe(() => {
        console.log('Order created successfully');
        this.orderForm.reset();
      });
    }
  }
}
