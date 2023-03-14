import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
    
  if (!this.authService.isConnected()) {
    // this.toastr.info('Please Log In!');
    this.router.navigate(['/auth']);
    return true
  }
  // logged in, so return true
  this.authService.isConnected();
  return true;
}
}
