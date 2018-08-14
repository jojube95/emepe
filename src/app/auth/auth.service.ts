import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;


  items: AngularFireList<Item[]> = null;
  userId: string;
  user;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    // Get the user id of the current auth user
    this.user = this.afAuth.user;
    this.afAuth.authState.subscribe(
      user => {
        if(user){
          this.userId = user.uid;
        }
      }
    )
  }

  //Get items of the auth user
  getItemsList(): AngularFireList<Item[]>{
    if (!this.userId){
      return null;
    }
    else{
      this.items = this.db.list(`items/`)
      return this.items;
    }
  }

  //Create new item
  createItem(item: Item){
    item.userId = this.userId;
    this.items.push([item]);
  }

  getUserId(){
    return this.userId;
  }

  getUser(){
    return this.user;
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
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
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
