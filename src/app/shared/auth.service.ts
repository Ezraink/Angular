import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedValue = false;
  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }
  setAuthenticated(value: boolean): void {
    this.isAuthenticatedValue = value;
  }
}
