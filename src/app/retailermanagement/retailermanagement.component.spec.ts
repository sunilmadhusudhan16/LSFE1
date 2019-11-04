import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailermanagementComponent } from './retailermanagement.component';

describe('RetailermanagementComponent', () => {
  let component: RetailermanagementComponent;
  let fixture: ComponentFixture<RetailermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
