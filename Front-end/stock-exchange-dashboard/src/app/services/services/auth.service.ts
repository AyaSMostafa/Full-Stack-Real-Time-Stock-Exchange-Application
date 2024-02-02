// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5209/api/account'; // Update with your API URL

  constructor(private http: HttpClient) {}

 
  register(user: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user)
      .pipe(
        tap((response: any) => {
          this.storeToken(response.token);  // Store the token
        })
      );
  }

  login(user: LoginUserDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user)
      .pipe(
        tap((response: any) => {
          this.storeToken(response.token);  // Store the token
        })
      );
  }

  // Helper function to get JWT token from localStorage
  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  // Helper function to store JWT token in localStorage
  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
export interface RegisterUserDto {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface LoginUserDto {
  userName: string;
  password: string;
}