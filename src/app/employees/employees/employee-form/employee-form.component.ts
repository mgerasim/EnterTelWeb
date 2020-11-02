import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SelectEvent} from '@progress/kendo-angular-upload';
import {Employee} from '../../../api/models/employee';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {


  @Input() employee: Employee | undefined;

  public employeeForm: FormGroup;

  @Input() positions: Position[];

  @Output() onSave = new EventEmitter();

  private base64textString: string;

  constructor() { }

  ngOnInit() {
    this.employeeForm =  new FormGroup({
      name: new FormControl(this.employee ? this.employee.name : ''),
      surname: new FormControl(this.employee ? this.employee.surname : ''),
      patronymic: new FormControl(this.employee ? this.employee.patronymic : ''),
      birthDate: new FormControl(this.employee ? new Date(this.employee.birthDate) : ''),
      position: new FormControl(this.employee ? this.employee.positionId : ''),
      photo: new FormControl(''),
      personnelNumber: new FormControl(this.employee ? this.employee.personnelNumber : ''),
      contactPhone: new FormControl(this.employee ? this.employee.contactPhone : ''),
      workPhone: new FormControl(this.employee ? this.employee.workPhone : ''),
      email: new FormControl(this.employee ? this.employee.email : '', Validators.email)
    });
    this.base64textString = this.employee ? this.employee.photo : '';
  }

  onPhotoSelect($event: SelectEvent) {
    const file = $event.files[0].rawFile;

    const reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
  }

  protected handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  onButtonClick() {
    if (isNullOrUndefined(this.employee)) {
      this.employee = {
      } as Employee;
    }
    this.employee.name = this.employeeForm.controls.name.value;
    this.employee.birthDate = this.employeeForm.controls.birthDate.value;
    this.employee.birthDate = this.employeeForm.controls.birthDate.value;
    this.employee.contactPhone = this.employeeForm.controls.contactPhone.value;
    this.employee.email = this.employeeForm.controls.email.value;
    this.employee.patronymic = this.employeeForm.controls.patronymic.value;
    this.employee.personnelNumber = this.employeeForm.controls.personnelNumber.value;
    this.employee.photo = this.base64textString;
    this.employee.surname = this.employeeForm.controls.surname.value;
    this.employee.positionId = this.employeeForm.controls.position.value;
    this.employee.workPhone = this.employeeForm.controls.workPhone.value;


    this.onSave.emit(this.employee);
  }
}
