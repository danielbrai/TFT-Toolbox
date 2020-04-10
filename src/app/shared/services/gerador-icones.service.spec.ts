import { TestBed } from '@angular/core/testing';

import { GeradorIconesService } from './gerador-icones.service';

describe('GeradorIconesService', () => {
  let service: GeradorIconesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeradorIconesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
