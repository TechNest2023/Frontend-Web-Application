import { TestBed } from '@angular/core/testing';

import { SelectedSpecialistService } from './selected-specialist.service';

describe('SelectedSpecialistService', () => {
  let service: SelectedSpecialistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedSpecialistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
