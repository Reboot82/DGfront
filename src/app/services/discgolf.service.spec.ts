import { TestBed } from '@angular/core/testing';

import { DiscgolfService } from './discgolf.service';

describe('DiscgolfService', () => {
  let service: DiscgolfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscgolfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
