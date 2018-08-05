import { Component, OnInit } from '@angular/core';
import Firebase from '@firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NotifyRent';

  constructor() {}

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
