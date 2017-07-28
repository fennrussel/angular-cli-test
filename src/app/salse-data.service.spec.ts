import { TestBed, inject } from '@angular/core/testing';

import { SalseDataService } from './salse-data.service';

describe('SalseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalseDataService]
    });
  });

  it('should be created', inject([SalseDataService], (service: SalseDataService) => {
    expect(service).toBeTruthy();
  }));
});
