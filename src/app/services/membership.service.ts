import { Injectable } from '@angular/core';
import * as FirebaseUI from 'firebaseui';
import Firebase from '@firebase/app';
import '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  _firebaseAuth = null;
  _firebaseAuthUI = null;

  constructor() {}

  get Auth() {
    if (this._firebaseAuth == null) {
      this._firebaseAuth = Firebase.auth();
    }
    return this._firebaseAuth;
  }

  get AuthUI() {
    if (this._firebaseAuthUI == null) {
      this._firebaseAuthUI = new FirebaseUI.auth.AuthUI(this.Auth);
    }
    return this._firebaseAuthUI;
  }

  get SignInOptions() {
    return [
      Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      Firebase.auth.EmailAuthProvider.PROVIDER_ID,
      Firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ];
  }

  IsUserLoggedIn() {
    return true;
  }
}
