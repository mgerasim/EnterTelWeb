import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Division} from '../../../api/models/division';
import {EmployeeDomain} from '../../../api/models/employee-domain';
import {Employee} from '../../../api/models/employee';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {

  @Input() employees: EmployeeDomain[];

  @Output() onEdit = new EventEmitter();
  @Output() onAddAccount = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
