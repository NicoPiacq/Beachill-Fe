import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
  
  
  @Injectable({ providedIn: 'root' })
  export class AuthAdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Promise<boolean | UrlTree>
      | Observable<boolean | UrlTree> {
      return this.authService.authenticatedUser.pipe(
        take(1),
        map(user => {
          const isAuth = !!user;
          //chiamo il servizio e controllo il ruolo dell' utente dal backend
          if (isAuth && (user.user.role == "ADMIN" || user.user.role == "SUPERADMIN")) {
            return true;
          }
          return this.router.createUrlTree(['/']);
        })
      );
    }
  }
  