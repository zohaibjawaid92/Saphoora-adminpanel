import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementAddComponent } from './user-management-add.component';

describe('UserManagementAddComponent', () => {
  let component: UserManagementAddComponent;
  let fixture: ComponentFixture<UserManagementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
