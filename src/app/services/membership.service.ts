import { Injectable, Optional } from '@angular/core';
import * as FirebaseUI from 'firebaseui';
import Firebase from '@firebase/app';
import '@firebase/auth';

export class MembershipServiceConfig {
  public signInOptions: Array<string>;
}

export class MembershipUser {
  public displayName: string;
  public email: string;
  public photoURL: string;
  public isAnonymous: boolean;
  public uid: string;
  public providerData: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private firebaseAuthUI: FirebaseUI.auth.AuthUI;
  private configuration: MembershipServiceConfig;
  private currentUser: MembershipUser;

  constructor(@Optional() config: MembershipServiceConfig) {
    if (config) {
      this.configuration = config;
    } else {
      this.configuration = new MembershipServiceConfig();
    }
  }

  public get authUI() {
    if (!this.firebaseAuthUI) {
      this.firebaseAuthUI = new FirebaseUI.auth.AuthUI(Firebase.auth());
    }
    return this.firebaseAuthUI;
  }

  public getCurrentUser() {
    return new Promise<MembershipUser>((resolve, reject) => {
      if (this.currentUser) {
        resolve(this.currentUser);
      } else {
        const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          if (user) {
            this.currentUser = new MembershipUser();
            this.currentUser.displayName = user.displayName;
            this.currentUser.email = user.email;
            this.currentUser.photoURL = user.photoURL;
            this.currentUser.isAnonymous = user.isAnonymous;
            this.currentUser.uid = user.uid;
            this.currentUser.providerData = user.providerData;
            resolve(this.currentUser);
          } else {
            reject();
          }
        }, reject);
      }
    });
  }
}
