// register.component.ts

import { Component } from '@angular/core';
import { AuthService,RegisterUserDto } from '../../services/services/auth.service';  // Import AuthService


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: RegisterUserDto = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.registerData).subscribe(
      (response) => {
        console.log('Registration successful', response);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}
