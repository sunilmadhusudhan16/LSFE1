import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectioncentermanagementComponent } from './collectioncentermanagement.component';

describe('CollectioncentermanagementComponent', () => {
  let component: CollectioncentermanagementComponent;
  let fixture: ComponentFixture<CollectioncentermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectioncentermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectioncentermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
