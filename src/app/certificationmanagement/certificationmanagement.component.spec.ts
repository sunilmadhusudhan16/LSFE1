import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationmanagementComponent } from './certificationmanagement.component';

describe('CertificationmanagementComponent', () => {
  let component: CertificationmanagementComponent;
  let fixture: ComponentFixture<CertificationmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
