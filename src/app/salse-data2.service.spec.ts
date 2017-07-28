import { TestBed, inject } from '@angular/core/testing';

import { SalseData2Service } from './salse-data2.service';

describe('SalseData2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalseData2Service]
    });
  });

  it('should be created', inject([SalseData2Service], (service: SalseData2Service) => {
    expect(service).toBeTruthy();
  }));
});
