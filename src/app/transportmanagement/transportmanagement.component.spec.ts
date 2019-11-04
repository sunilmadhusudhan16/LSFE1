import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportmanagementComponent } from './transportmanagement.component';

describe('TransportmanagementComponent', () => {
  let component: TransportmanagementComponent;
  let fixture: ComponentFixture<TransportmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
