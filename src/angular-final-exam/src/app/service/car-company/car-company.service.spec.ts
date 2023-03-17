import { TestBed } from '@angular/core/testing';

import { CarCompanyService } from './car-company.service';

describe('CarCompanyService', () => {
  let service: CarCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
