import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeeregComponent } from './emloyeereg.component';

describe('EmloyeeregComponent', () => {
  let component: EmloyeeregComponent;
  let fixture: ComponentFixture<EmloyeeregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmloyeeregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmloyeeregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
