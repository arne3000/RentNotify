import { Component, OnInit } from '@angular/core';

import * as FirebaseUI from 'firebaseui';
import Firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let ui = new FirebaseUI.auth.AuthUI(Firebase.auth());
    
    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: '/dashboard',
      signInOptions: [
        Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        Firebase.auth.EmailAuthProvider.PROVIDER_ID,
        Firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
    });
  }

}
