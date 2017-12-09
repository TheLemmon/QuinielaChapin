import { TestBed, inject } from '@angular/core/testing';

import { QuinielaService } from './quiniela.service';

describe('QuinielaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuinielaService]
    });
  });

  it('should be created', inject([QuinielaService], (service: QuinielaService) => {
    expect(service).toBeTruthy();
  }));
});
