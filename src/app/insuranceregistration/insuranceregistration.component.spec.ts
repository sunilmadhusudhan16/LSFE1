import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceregistrationComponent } from './insuranceregistration.component';

describe('InsuranceregistrationComponent', () => {
  let component: InsuranceregistrationComponent;
  let fixture: ComponentFixture<InsuranceregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
