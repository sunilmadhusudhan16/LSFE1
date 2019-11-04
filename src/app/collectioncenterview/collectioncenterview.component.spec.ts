import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectioncenterviewComponent } from './collectioncenterview.component';

describe('CollectioncenterviewComponent', () => {
  let component: CollectioncenterviewComponent;
  let fixture: ComponentFixture<CollectioncenterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectioncenterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectioncenterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
