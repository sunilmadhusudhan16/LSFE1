import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancemanagementComponent } from './insurancemanagement.component';

describe('InsurancemanagementComponent', () => {
  let component: InsurancemanagementComponent;
  let fixture: ComponentFixture<InsurancemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
