import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { LOCAL_STORAGE } from '../enums/local-storage.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    const token = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
