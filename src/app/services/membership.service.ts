import { Injectable, Optional } from '@angular/core';
import * as FirebaseUI from 'firebaseui';
import Firebase from '@firebase/app';
import '@firebase/auth';

export class MembershipServiceConfig {
  signInOptions = [];
}

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private _firebaseAuthUI = null;
  private _currentUser = null;

  public signInOptions = [];

  constructor(@Optional() config: MembershipServiceConfig) {
    if (config) {
      this.signInOptions = config.signInOptions;
    }
  }

  public get authUI() {
    if (this._firebaseAuthUI == null) {
      this._firebaseAuthUI = new FirebaseUI.auth.AuthUI(Firebase.auth());
    }
    return this._firebaseAuthUI;
  }

  public getCurrentUser() {
    return new Promise((resolve, reject) => {
      if (this._currentUser != null) {
        resolve(this._currentUser);
      } else {
        const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          if (user) {
            this._currentUser = {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              isAnonymous: user.isAnonymous,
              uid: user.uid,
              providerData: user.providerData
            };
            resolve(this._currentUser);
          } else {
            reject();
          }
        }, reject);
      }
    });
  }
}
