

import { CcsidenavComponent } from './ccsidenav.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing/src/testing';

describe('CcsidenavComponent', () => {
  let component: CcsidenavComponent;
  let fixture: ComponentFixture<CcsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
