import { TestBed } from '@angular/core/testing';

import { ModificarService } from './modificar.service';

describe('ModificarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModificarService = TestBed.get(ModificarService);
    expect(service).toBeTruthy();
  });
});
