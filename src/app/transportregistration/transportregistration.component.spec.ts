import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportregistrationComponent } from './transportregistration.component';

describe('TransportregistrationComponent', () => {
  let component: TransportregistrationComponent;
  let fixture: ComponentFixture<TransportregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
