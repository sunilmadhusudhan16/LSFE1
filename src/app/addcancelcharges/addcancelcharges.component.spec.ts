import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcancelchargesComponent } from './addcancelcharges.component';

describe('AddcancelchargesComponent', () => {
  let component: AddcancelchargesComponent;
  let fixture: ComponentFixture<AddcancelchargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcancelchargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcancelchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
