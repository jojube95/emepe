import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, NgForm} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import {RouterModule} from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {CommonModule} from '@angular/common';
import {BsDatepickerModule} from 'ngx-bootstrap';

export const firebaseCredentials = {
  apiKey: 'AIzaSyA2RfdXx_h3pDyUAHHUVNnnieuIsaXQgKs',
  authDomain: 'emepe-2b333.firebaseapp.com',
  databaseURL: 'https://emepe-2b333.firebaseio.com',
  projectId: 'emepe-2b333',
  storageBucket: 'emepe-2b333.appspot.com',
  messagingSenderId: '954245660505'
};

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseCredentials),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
