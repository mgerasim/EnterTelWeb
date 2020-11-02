/* tslint:disable */
import { Account } from './account';
import { Position } from './position';
export interface Employee {
  account?: Account;
  birthDate: string;
  contactPhone: string;
  email: string;
  id?: number;
  name: string;
  patronymic: string;
  personnelNumber: string;
  photo: string;
  position?: Position;
  positionId?: number;
  surname: string;
  workPhone: string;
}
