import { TestBed } from '@angular/core/testing';

import { PrestataireServiceService } from './prestataire-service.service';

describe('PrestataireServiceService', () => {
  let service: PrestataireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestataireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
