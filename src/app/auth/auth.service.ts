import { Injectable } from '@angular/core';

import {AuthService as AuthApiService} from '../api/services/auth.service';
import {AuthRequest} from '../api/models/auth-request';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {AuthResponse, Employee} from '../api/models';
import {BehaviorSubject, of, ReplaySubject, Subject} from 'rxjs';
import {isNullOrUndefined} from 'util';
import {EmployeesService} from '../api/services/employees.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  employee$ = new BehaviorSubject(null);

  constructor(
    private authApiService: AuthApiService,
    private employeesService: EmployeesService
  ) {
    const employeeId = parseInt(localStorage.getItem('employee_id'), null);
    if (employeeId) {
      this.employeesService.apiEmployeesIdGet({id: employeeId}).pipe(
        take(1),
        tap(employee => this.employee$.next(employee))
      ).subscribe();
    }
  }

  login(auth: AuthRequest) {
    return this.authApiService.apiAuthLoginPost({body: auth}).pipe(
      map((data: AuthResponse) => {
        localStorage.setItem('access_token', data.token);
        if (data.employeeId) {
          localStorage.setItem('employee_id', data.employeeId.toString());
        }
        localStorage.setItem('user_name', data.userName);
        return data.employeeId;
      }),
      switchMap((employeeId: number | null | undefined) => {
        if (isNullOrUndefined(employeeId)) {
          return of(undefined);
        } else {
          return this.employeesService.apiEmployeesIdGet({id: employeeId});
        }
      }),
      tap((employee: Employee | undefined) => {
        this.employee$.next(employee);
      })
    );
  }
}
