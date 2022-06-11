import { TestBed } from '@angular/core/testing';

import { NgxCodethierService } from './ngx-codethier.service';

describe('NgxCodethierService', () => {
  let service: NgxCodethierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCodethierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
