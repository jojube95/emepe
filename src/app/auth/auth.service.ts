import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  userId: string;
  user;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    // Get the user id of the current auth user
    this.afAuth.authState.subscribe(
      user => {
        if(user){
          this.userId = user.uid;
          this.user = user;
        }
      }
    )
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


  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
              (token: string) => this.token = token
            )

        }
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
