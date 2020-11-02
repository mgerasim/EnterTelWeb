import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Account} from '../../../api/models/account';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-employee-account-form',
  templateUrl: './employee-account-form.component.html',
  styleUrls: ['./employee-account-form.component.scss']
})
export class EmployeeAccountFormComponent implements OnInit {

  @Input() account: Account | null;

  @Input() employeeId: number;

  @Output() onSave = new EventEmitter();

  public accountForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.accountForm =  new FormGroup({
      userName: new FormControl(this.account ? this.account.userName : ''),
      password: new FormControl(this.account ? this.account.password : '')
    });
  }

  onButtonClick() {
    if (isNullOrUndefined(this.account)) {
      this.account = {
      } as Account;
    }

    this.account.employeeId = this.employeeId;
    this.account.userName = this.accountForm.controls.userName.value;
    this.account.password = this.accountForm.controls.password.value;

    this.onSave.emit(this.account);
  }
}
