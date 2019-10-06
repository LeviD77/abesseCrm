import { TestBed } from '@angular/core/testing';

import { AbesseHttpClientService } from './abesse-http-client.service';

describe('AbesseHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbesseHttpClientService = TestBed.get(AbesseHttpClientService);
    expect(service).toBeTruthy();
  });
});
