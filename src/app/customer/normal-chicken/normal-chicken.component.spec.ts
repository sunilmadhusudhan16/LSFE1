import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalChickenComponent } from './normal-chicken.component';

describe('NormalChickenComponent', () => {
  let component: NormalChickenComponent;
  let fixture: ComponentFixture<NormalChickenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalChickenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
