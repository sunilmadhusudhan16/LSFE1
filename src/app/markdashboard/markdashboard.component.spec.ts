import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdashboardComponent } from './markdashboard.component';

describe('MarkdashboardComponent', () => {
  let component: MarkdashboardComponent;
  let fixture: ComponentFixture<MarkdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
