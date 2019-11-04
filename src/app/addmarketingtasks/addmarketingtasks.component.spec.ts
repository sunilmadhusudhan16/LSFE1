import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketingTasksComponent } from './addmarketingtasks.component';

describe('AddMarketingTaskComponent', () => {
  let component: AddMarketingTasksComponent;
  let fixture: ComponentFixture<AddMarketingTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketingTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
