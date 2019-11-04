import { TestBed } from '@angular/core/testing';

import { CollectionServivce } from './collection.service';

describe('CollectionServivce', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectionServivce = TestBed.get(CollectionServivce);
    expect(service).toBeTruthy();
  });
});
