import { TestBed } from '@angular/core/testing';

import { NgLineService } from './ng-line.service';

describe('NgLineService', () => {
  let service: NgLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
