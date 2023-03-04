import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email == 'prince@gmail.com' && password == 'prince123' || email == 'atul@gmail.com' && password == 'atul123' || email == 'girija@gmail.com' && password == 'girija123' || email == 'himanshu@gmail.com' && password == 'himanshu123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Prince Sharma', email: 'prince@gmail.com' });
    }
    return throwError(() =>new Error('Failed to login'));
  }
}
