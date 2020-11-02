import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {AuthGuard} from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
