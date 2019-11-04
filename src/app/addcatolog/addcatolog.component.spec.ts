import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcatologComponent } from './addcatolog.component';

describe('AddcatologComponent', () => {
  let component: AddcatologComponent;
  let fixture: ComponentFixture<AddcatologComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcatologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcatologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
