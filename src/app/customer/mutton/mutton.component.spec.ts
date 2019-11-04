import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuttonComponent } from './mutton.component';

describe('MuttonComponent', () => {
  let component: MuttonComponent;
  let fixture: ComponentFixture<MuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
