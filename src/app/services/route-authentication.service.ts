import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { MembershipService } from './membership.service';

@Injectable({
  providedIn: 'root'
})
export class RouteAuthenticationService implements CanActivate {

  constructor(private membershipService: MembershipService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('checking that were logged in');
    if (this.membershipService.IsUserLoggedIn()) {
      console.log('not authed');
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
