import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MembershipService } from '../services/membership.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl = '/dashboard';

  constructor(private router: Router, private route: ActivatedRoute, private membershipService: MembershipService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.returnUrl = params['return'] || '/dashboard');

    this.membershipService.authUI.start('#firebaseui-auth-container', {
      signInSuccessUrl: this.returnUrl,
      signInOptions: this.membershipService.signInOptions,
    });
  }
}
