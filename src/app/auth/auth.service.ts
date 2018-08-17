import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {UserModel} from '../shared/userModel';
import {AngularFireModule} from 'angularfire2';
import {DateUtilities} from '../utilities/date-utilities';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  dateUtilities: DateUtilities = new DateUtilities();

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private af: AngularFireModule) {

  }


  signOut(){
    this.afAuth.auth.signOut().then(
      () => this.router.navigate([''])
    );
  }


  signupUser(userObj: UserModel){
    firebase.auth().createUserWithEmailAndPassword(userObj.mail, userObj.password)
      .then(
        user => {
          userObj.setUserId(user.user.uid);
          firebase.database().ref().child("users").child(user.user.uid).set({
            uid: userObj.uid,
            username: userObj.username,
            mail: userObj.mail,
            password: userObj.password,
            name: userObj.name,
            secondName: userObj.secondName,
            phone: userObj.phone,
            birthday: this.dateUtilities.dateToString(userObj.birthdayDate),
            country: userObj.country,
            location: userObj.location
          });
          this.signinUser(userObj.mail, userObj.password);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/user-details']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token,

            );
        },

      )
      .catch(
        error => alert(error.message + '\n Test mail: test@test.com \n Test pass: testtest')
      );

  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  isAuthenticated() {
    console.log(this.token != null);
    return this.token != null;
  }
}
