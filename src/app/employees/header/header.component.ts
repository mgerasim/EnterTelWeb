import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {showError} from '../../shared/error-handle';
import {Subscription} from 'rxjs';
import {Employee} from '../../api/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() onAddEmployee = new EventEmitter();

  @Output() onSearch = new EventEmitter();

  employee: Employee | undefined | null;

  searchString = '';

  private sub: Subscription;

  get isAuth() {
    return !isNullOrUndefined(localStorage.getItem('access_token'));
  }

  get userName() {
    if (this.employee) {
      return `${this.employee.name} ${this.employee.surname} ${this.employee.patronymic}`;
    } else {
      return localStorage.getItem('user_name');
    }
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.authService.employee$.subscribe(employee => {
      this.employee = employee;
      console.log(employee);
    }, error => showError(error));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth']).then();

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
