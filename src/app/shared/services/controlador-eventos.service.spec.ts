import { TestBed } from '@angular/core/testing';

import { ControladorEventosService } from './controlador-eventos.service';

describe('ControladorEventosService', () => {
  let service: ControladorEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControladorEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
