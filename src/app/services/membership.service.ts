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

  _eventUserLogout = null;

  CurrentUser = null;

  constructor() {
    console.log('test');
  }

  get Auth() {
    if (this._firebaseAuth == null) {
      this._firebaseAuth = Firebase.auth();
      this._firebaseAuth.onAuthStateChanged(this._eventOnAuthenticationChange);
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
    console.log('IsUserLoggedIn', this.CurrentUser);
    return this.CurrentUser != null;
  }

  OnUserLogout(newEvent) {
    this._eventUserLogout = newEvent;
  }

  _eventOnAuthenticationChange(user) {
    this.CurrentUser = null;

    if (user) {
      this.CurrentUser = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        uid: user.uid,
        providerData: user.providerData
      };
    }

    console.log(this.CurrentUser);

    if (this.CurrentUser == null && typeof this._eventUserLogout === 'function') {
      this._eventUserLogout();
    }
  }
}
