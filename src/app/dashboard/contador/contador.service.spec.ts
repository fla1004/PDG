import { TestBed } from '@angular/core/testing';

import { ContadorService } from '../dashboard/services/contador.service';

describe('ContadorService', () => {
  let service: ContadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
