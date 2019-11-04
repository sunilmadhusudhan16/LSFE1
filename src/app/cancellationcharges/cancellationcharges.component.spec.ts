import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationchargesComponent } from './cancellationcharges.component';

describe('CancellationchargesComponent', () => {
  let component: CancellationchargesComponent;
  let fixture: ComponentFixture<CancellationchargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellationchargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
