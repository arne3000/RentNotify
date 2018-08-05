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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private membershipService: MembershipService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.returnUrl = params['return'] || '/dashboard');

    this.membershipService.AuthUI.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(authResult, redirectUrl);
          return true;
        },
      },
      signInSuccessUrl: this.returnUrl ,
      signInOptions: this.membershipService.SignInOptions,
    });
  }
}
