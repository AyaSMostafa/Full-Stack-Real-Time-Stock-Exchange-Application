// login.component.ts

import { Component } from '@angular/core';
import { AuthService,LoginUserDto } from '../../services/services/auth.service';  // Import AuthService
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService , private router: Router) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        console.log('Login successful', response);
        alert('Login successful');
        this.router.navigate(['/stocks-dashboard']);

        // TODO: Handle successful login, navigate to dashboard, etc.
      },
      (error) => {
        console.error('Login failed', error);
        // TODO: Handle login failure, show error message, etc.
      }
    );
  }
}
