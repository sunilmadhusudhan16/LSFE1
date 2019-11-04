import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpsidenavComponent } from './tpsidenav.component';

describe('SidenavComponent', () => {
  let component: TpsidenavComponent;
  let fixture: ComponentFixture<TpsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
