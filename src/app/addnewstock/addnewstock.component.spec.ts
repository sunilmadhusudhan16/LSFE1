import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewstockComponent } from './addnewstock.component';

describe('AddnewstockComponent', () => {
  let component: AddnewstockComponent;
  let fixture: ComponentFixture<AddnewstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
