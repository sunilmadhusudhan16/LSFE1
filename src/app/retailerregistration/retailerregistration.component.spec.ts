import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerregistrationComponent } from './retailerregistration.component';

describe('RetailerregistrationComponent', () => {
  let component: RetailerregistrationComponent;
  let fixture: ComponentFixture<RetailerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
