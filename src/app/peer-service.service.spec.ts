import { TestBed, inject } from '@angular/core/testing';

import { PeerServiceService } from './peer-service.service';

describe('PeerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeerServiceService]
    });
  });

  it('should ...', inject([PeerServiceService], (service: PeerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
