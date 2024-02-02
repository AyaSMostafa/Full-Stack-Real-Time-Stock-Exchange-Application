// login.component.ts

import { Component } from '@angular/core';
import { AuthService,LoginUserDto } from '../../services/services/auth.service';  // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: LoginUserDto = {
    userName: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        console.log('Login successful', response);
        // TODO: Handle successful login, navigate to dashboard, etc.
      },
      (error) => {
        console.error('Login failed', error);
        // TODO: Handle login failure, show error message, etc.
      }
    );
  }
}
