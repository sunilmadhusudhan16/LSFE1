import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationregistrationComponent } from './certificationregistration.component';

describe('CertificationregistrationComponent', () => {
  let component: CertificationregistrationComponent;
  let fixture: ComponentFixture<CertificationregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
