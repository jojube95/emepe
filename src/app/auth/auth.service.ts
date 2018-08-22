import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {UserModel} from '../shared/userModel';
import {AngularFireModule} from 'angularfire2';
import {DateUtilities} from '../utilities/date-utilities';
import {Restaurant} from '../shared/restaurant';
import {DataStorageService} from '../shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  dateUtilities: DateUtilities = new DateUtilities();

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private af: AngularFireModule,
              private dataStorageService: DataStorageService) {

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
            location: userObj.location,
            pic: userObj.pic
          });
          this.signinUser(userObj.mail, userObj.password);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signIn(email: string, password: string){
    let userLogged: UserModel;
    let restaurantLogged: Restaurant;
    let logged = false;

    this.dataStorageService.getObservableRestaurants().subscribe(restaurants => {
      restaurantLogged = restaurants.find(i => i.mail === email);
      logged = true;
      if(restaurantLogged){
        this.signinRestaurant(email, password);
      }
    });

    this.dataStorageService.getObservableUsers().subscribe(users => {
      userLogged = users.find(i => i.mail === email);
      logged = true;
      if(userLogged){
        this.signinUser(email, password);
      }
    });

  }

  singUpRestaurant(restaurant: Restaurant){
    firebase.auth().createUserWithEmailAndPassword(restaurant.mail, restaurant.password)
      .then(
        user => {
          restaurant.setRestaurantId(user.user.uid);
          firebase.database().ref().child("restaurants").child(user.user.uid).set({
            uid: restaurant.uid,
            mail: restaurant.mail,
            password: restaurant.password,
            name: restaurant.name,
            phone: restaurant.phone,
            country: restaurant.country,
            location: restaurant.location,
            shedule: restaurant.shedule,
            rating: restaurant.rating,
            pic: restaurant.pic
          });
          this.signinRestaurant(restaurant.mail, restaurant.password);
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

  signinRestaurant(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/restaurant-details']);
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
