import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Firebase from '@firebase/app';
import { MembershipService } from './services/membership.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NotifyRent';

  constructor(private router: Router, private membershipService: MembershipService) {}

  ngOnInit() {

    Firebase.initializeApp({
      apiKey: 'AIzaSyAN4L5ZskAjBP5LnmPd7o1hAEO7hebzW2I',
      authDomain: 'rentsystem-web.firebaseapp.com',
      databaseURL: 'https://rentsystem-web.firebaseio.com',
      projectId: 'rentsystem-web',
      storageBucket: 'rentsystem-web.appspot.com',
      messagingSenderId: '1089457440381'
    });
  }
}
