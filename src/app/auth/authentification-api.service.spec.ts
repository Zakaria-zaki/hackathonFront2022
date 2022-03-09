import { TestBed } from '@angular/core/testing';

import { AuthentificationApiService } from './authentification-api.service';

describe('AuthentificationApiService', () => {
  let service: AuthentificationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
