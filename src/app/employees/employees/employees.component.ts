import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../../api/services/employees.service';
import {showError} from '../../shared/error-handle';
import {DivisionsService} from '../../api/services/divisions.service';
import {Account, Division, Employee, EmployeeDomain, Position} from '../../api/models';
import {PositionsService} from '../../api/services';
import {Observable} from 'rxjs';
import notify from 'devextreme/ui/notify';
import {error} from 'util';


enum Action {
  addEmployee
}

type MenuItem = {
  id: Action,
  text: string
};

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  /**
   * Структура предприятия
   */
  divisions: Division[];

  /**
   * Выбранное подразделение для просмотра сотрудников
   */
  division: Division;

  /**
   * Свободные должности
   */
  vacantPositions: Position[];

  public items: MenuItem[] = [
    {
      id: Action.addEmployee,
      text: 'Добавить сотрудника'
    }
    ];

  opened = false;

  employees: EmployeeDomain[];
  employee?: Employee;
  accountOpened = false;

  account: Account;
  loading = false;

  constructor(
    private employeesService: EmployeesService,
    private positionsService: PositionsService,
    private divisionsService: DivisionsService
  ) { }

  ngOnInit() {
    this.refreshEmployees();

    this.divisionsService.apiDivisionsGet().subscribe((data) => {
      this.divisions = data;
      this.division = this.divisions[0];
    }, error => {
      showError(error);
    });
  }

  private refreshEmployees() {
    this.loading = true;
    this.employeesService.apiEmployeesGet().subscribe((employees) => {
      this.employees = employees;
      this.loading = false;
    }, error => {
      showError(error);
      this.loading = false;
    });
  }

  /**
   * Событие на изменение подразделения для просмотра
   * @param division
   */
  onSelected(division: Division) {
    this.division = division;
    this.loading = true;
    this.employeesService.apiEmployeesDivisionGet({divisionId: division.id}).subscribe(
      employees => {
        this.employees = employees;
        this.loading = false;
      },
      err => {
        showError(err);
        this.loading = false;
      }
    );
  }

  onAddEmployee() {
    this.employee = undefined;
    this.openDialogEmployeeForm();
  }

  private openDialogEmployeeForm() {
    this.positionsService.apiPositionsVacantGet().subscribe(
      positions => {
        this.vacantPositions = positions;
        console.log(this.vacantPositions);
        this.opened = true;
      },
      error => showError(error));
  }

  close(result: string) {
    this.opened = false;
  }

  onEmployeeSave(employee: Employee) {
    if (employee.id) {
      this.loading = true;
      this.employeesService.apiEmployeesIdPut({id: employee.id, body: employee}).subscribe(
        () => {
          notify('Сотрудник успешно обновлен');
          this.opened = false;
          this.loading = false;
          this.refreshEmployees();
        },
        error => {
          showError(error);
          this.loading = false;
        }
      );
    } else {
      this.loading = true;
      this.employeesService.apiEmployeesPost({body: employee}).subscribe(
        () => {
          this.loading = false;
          notify('Сотрудник успешно дабавлен');
          this.opened = false;
          this.refreshEmployees();
        },
        error => {
          showError(error);
          this.loading = false;
        });
    }
  }

  onEmployeeEdit(employee: Employee) {
    this.employee = employee;
    this.openDialogEmployeeForm();
  }

  onAddAccount(employee: Employee) {
    this.employee = employee;
    if (this.employee === null) {
      throw new Error('Не указан сотрудник');
    }
    this.loading = true;
    this.employeesService.apiEmployeesAccountGet({id: this.employee.id}).subscribe(
      (account) => {
        this.account = account;
        this.loading = false;
        this.accountOpened = true;
      },
      err => {
        showError(err);
        this.loading = false;
      }
    );
  }

  onDelete(employee: Employee) {
    if (!confirm('Вы действительно хотите удалить сотрудника?')) {
      return;
    }
    this.loading = true;
    this.employeesService.apiEmployeesIdDelete({id: employee.id}).subscribe(
      () => {
        notify('Сотрудник успешно удален');
        this.loading = false;
        this.refreshEmployees();
      },
      err => {
        this.loading = false;
        showError(err);
      }
    );
  }

  closeAccountForm(cancel: string) {
    this.accountOpened = false;
  }

  onSaveAccount(account: Account) {
    this.loading = true;
    this.employeesService.apiEmployeesAccountPost({body: account}).subscribe(
      () => {
        this.loading = false;
        notify('Учетная запись успешна сохранена!');
        this.accountOpened = false;
      }, err => {
        this.loading = false;
        showError(err);
      });
  }

  onSearch(searchString: string) {
    this.loading = true;
    this.employeesService.apiEmployeesSearchGet({search: searchString}).subscribe(
      employees => {
        this.loading = false;
        this.employees = employees;
      },
      err => {
        this.loading = false;
        showError(err);
      }
    );
  }
}
