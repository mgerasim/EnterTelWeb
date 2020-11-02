import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {NavigationService} from '../shared/services/navigation.service';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private navigationService: NavigationService
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const authToken = localStorage.getItem('access_token');
      if (!isNullOrUndefined(authToken)) {
        return true;
      }
      this.navigationService.toAuth();
      return false;
  }

}
