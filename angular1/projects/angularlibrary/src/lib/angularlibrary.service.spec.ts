import { TestBed } from '@angular/core/testing';

import { AngularlibraryService } from './angularlibrary.service';

describe('AngularlibraryService', () => {
  let service: AngularlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
