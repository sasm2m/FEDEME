import { TestBed } from '@angular/core/testing';

import { CalificacionxparticipanteService } from './calificacionxparticipante.service';

describe('CalificacionxparticipanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalificacionxparticipanteService = TestBed.get(CalificacionxparticipanteService);
    expect(service).toBeTruthy();
  });
});
