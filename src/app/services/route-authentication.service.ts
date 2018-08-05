import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { MembershipService } from './membership.service';

@Injectable({
  providedIn: 'root'
})
export class RouteAuthenticationService implements CanActivate {

  constructor(private membershipService: MembershipService) { }

  canActivate() {
    return this.membershipService.IsUserLoggedIn();
  }
}
