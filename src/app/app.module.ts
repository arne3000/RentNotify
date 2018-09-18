import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import Firebase from '@firebase/app';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppCoreModule } from './modules/app-core.module';

import { HouseholdComponent } from './household/household.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HouseholdComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AppCoreModule.forRoot({
      signInOptions: [
        Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        Firebase.auth.EmailAuthProvider.PROVIDER_ID,
        Firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
