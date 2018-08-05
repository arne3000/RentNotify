import { Component, OnInit } from '@angular/core';

import { MembershipService } from '../services/membership.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private membershipService: MembershipService) {}

  ngOnInit() {
    this.membershipService.AuthUI.start('#firebaseui-auth-container', {
      signInSuccessUrl: '/dashboard',
      signInOptions: this.membershipService.SignInOptions,
    });
  }
}
