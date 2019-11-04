import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkregComponent } from './markreg.component';

describe('MarkregComponent', () => {
  let component: MarkregComponent;
  let fixture: ComponentFixture<MarkregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
