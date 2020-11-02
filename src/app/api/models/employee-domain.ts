/* tslint:disable */
import { Employee } from './employee';
import { Position } from './position';
export interface EmployeeDomain {
  employee?: Employee;
  managerId?: null | number;
  position?: Position;
}
