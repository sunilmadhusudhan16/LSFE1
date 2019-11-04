import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceviewComponent } from './insuranceview.component';

describe('InsuranceviewComponent', () => {
  let component: InsuranceviewComponent;
  let fixture: ComponentFixture<InsuranceviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
