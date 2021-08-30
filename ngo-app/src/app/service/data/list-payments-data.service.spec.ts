import { TestBed } from '@angular/core/testing';

import { ListPaymentsDataService } from './list-payments-data.service';

describe('ListPaymentsDataService', () => {
  let service: ListPaymentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPaymentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
