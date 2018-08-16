import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {User} from '../shared/user';
import {AngularFireModule} from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  userId: string;
  user: User;


  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private af: AngularFireModule) {
    // Get the user id of the current auth user
    // this.afAuth.authState.subscribe(
    //   user => {
    //     if(user){
    //       this.userId = user.uid;
    //       this.user = user;
    //     }
    //   }
    // )
  }

  getUserId(){
    return this.userId;
  }

  getUser(){
    return this.user;
  }

  signOut(){
    this.afAuth.auth.signOut().then(
      () => this.router.navigate([''])
    );
  }


  signupUser(userObj: User){
    firebase.auth().createUserWithEmailAndPassword(userObj.mail, userObj.password)
      .then(
        user => {
          firebase.database().ref().child("users").child(user.user.uid).set(userObj);
          userObj.setUserId(user.user.uid);
          this.user = userObj;
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

          //Get the current user form DB
          const shit = this.db.object('/users' + response.user.uid);
          console.log(shit);

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
}
