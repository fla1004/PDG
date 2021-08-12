import { TestBed } from '@angular/core/testing';

import { ContadorDetalleService } from './contador-detalle.service';

describe('ContadorDetalleService', () => {
  let service: ContadorDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
