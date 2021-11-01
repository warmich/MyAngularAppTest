import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service'; // reste à injecter un fournisseur dans le authService ...

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this._authService.isLoggedIn) { return true; }
    this._authService.redirectUrl = url;
    this._router.navigate(['/login']);

    return false;
  }
}
