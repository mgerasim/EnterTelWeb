/* tslint:disable */
import { Employee } from './employee';
export interface Account {
  employee?: Employee;
  employeeId?: null | number;
  id?: number;
  password: string;
  userName: string;
}
