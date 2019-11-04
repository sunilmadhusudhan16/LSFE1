

import { MarketingSidenavComponent } from './marketingsidenav.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

describe('MarketingSidenavComponent', () => {
  let component: MarketingSidenavComponent;
  let fixture: ComponentFixture<MarketingSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
