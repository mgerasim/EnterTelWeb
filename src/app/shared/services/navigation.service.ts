import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router
  ) { }

  toEmployees() {
    this.router.navigate(['']).then();
  }

  toAuth() {
    this.router.navigate(['auth']).then();
  }
}
