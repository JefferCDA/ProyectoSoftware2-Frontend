import { TestBed } from '@angular/core/testing';

import { VirtualLicensesService } from './virtuallicenses.service';

describe('VirtualLicensesService', () => {
  let service: VirtualLicensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualLicensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
