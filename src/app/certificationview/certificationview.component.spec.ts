import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationviewComponent } from './certificationview.component';

describe('CertificationviewComponent', () => {
  let component: CertificationviewComponent;
  let fixture: ComponentFixture<CertificationviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
