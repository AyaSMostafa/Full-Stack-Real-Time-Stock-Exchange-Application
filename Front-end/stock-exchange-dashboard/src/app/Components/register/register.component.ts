// register.component.ts

import { Component } from '@angular/core';
import { AuthService,RegisterUserDto } from '../../services/services/auth.service';  // Import AuthService
import { Router } from '@angular/router';


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

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.registerData).subscribe(
      (response) => {
        console.log('Registration successful', response);
        alert('Registration successful');
        this.router.navigate(['/stocks-dashboard']);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}
