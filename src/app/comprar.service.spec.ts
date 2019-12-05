import { TestBed } from '@angular/core/testing';

import { ComprarService } from './comprar.service';

describe('ComprarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComprarService = TestBed.get(ComprarService);
    expect(service).toBeTruthy();
  });
});
