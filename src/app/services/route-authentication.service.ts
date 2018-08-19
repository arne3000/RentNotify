import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { MembershipService } from './membership.service';

@Injectable({
  providedIn: 'root'
})
export class RouteAuthenticationService implements CanActivate {

  constructor(private membershipService: MembershipService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Promise<boolean>((resolve, reject) => {
      this.membershipService.getCurrentUser().then(() => {
        resolve(true);
      }, () => {
        this.router.navigate(['/login'], {
          queryParams: {
            return: state.url
          }
        });
        resolve(false);
      });
    });
  }
}
