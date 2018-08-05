import { TestBed, inject } from '@angular/core/testing';

import { RouteAuthenticationService } from './route-authentication.service';

describe('RouteAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteAuthenticationService]
    });
  });

  it('should be created', inject([RouteAuthenticationService], (service: RouteAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
