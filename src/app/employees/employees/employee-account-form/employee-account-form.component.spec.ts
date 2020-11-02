import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAccountFormComponent } from './employee-account-form.component';

describe('EmployeeAccountFormComponent', () => {
  let component: EmployeeAccountFormComponent;
  let fixture: ComponentFixture<EmployeeAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
