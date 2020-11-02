import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import {AngularSplitModule} from 'angular-split';
import { DivisionsComponent } from './employees/divisions/divisions.component';
import {DxLoadIndicatorModule, DxLoadPanelModule, DxScrollViewModule, DxTreeViewModule} from 'devextreme-angular';
import { EmployeesTableComponent } from './employees/employees-table/employees-table.component';
import {SharedModule as SharedCoreModule} from './../shared/shared.module';
import {SharedModule, TreeListModule} from '@progress/kendo-angular-treelist';
import { MenusModule } from '@progress/kendo-angular-menu';
import {DialogModule} from '@progress/kendo-angular-dialog';
import {ButtonModule, DropDownButtonModule} from '@progress/kendo-angular-buttons';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {LabelModule} from '@progress/kendo-angular-label';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IntlModule} from '@progress/kendo-angular-intl';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {UploadsModule} from '@progress/kendo-angular-upload';
import { HeaderComponent } from './header/header.component';
import { EmployeeAccountFormComponent } from './employees/employee-account-form/employee-account-form.component';
import { LayoutModule } from '@progress/kendo-angular-layout';


@NgModule({
  declarations: [EmployeesComponent, DivisionsComponent, EmployeesTableComponent, EmployeeFormComponent, HeaderComponent, EmployeeAccountFormComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AngularSplitModule,
    DxTreeViewModule,
    DxScrollViewModule,
    TreeListModule,
    MenusModule,
    DialogModule,
    ButtonModule,
    InputsModule,
    LabelModule,
    SharedModule,
    ReactiveFormsModule,
    IntlModule,
    DateInputsModule,
    DropDownsModule,
    UploadsModule,
    SharedCoreModule,
    SharedModule,
    DropDownButtonModule,
    LayoutModule,
    FormsModule,
    DxLoadIndicatorModule,
    DxLoadPanelModule
  ]
})
export class EmployeesModule { }
