import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcAdminComponent } from './cc-admin.component';

describe('CcAdminComponent', () => {
  let component: CcAdminComponent;
  let fixture: ComponentFixture<CcAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
