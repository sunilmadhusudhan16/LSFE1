

import { MarketingTaskListComponent } from './marketingtasklist.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

describe('MarketingTaskListComponent', () => {
  let component: MarketingTaskListComponent;
  let fixture: ComponentFixture<MarketingTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
