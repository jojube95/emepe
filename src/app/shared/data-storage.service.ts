import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {UserModel} from './userModel';
import {map} from 'rxjs/operators';
import {Restaurant} from './restaurant';
import {Category} from './category';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  usersRef: AngularFireList<any>;
  restaurantsRef: AngularFireList<any>;
  categoriesRef: AngularFireList<any>;

  usersObservable: Observable<UserModel[]>;
  restaurantsObservable: Observable<Restaurant[]>;
  categoriesObservable: Observable<string[]>;

  categoriesList: string[];
  restaurantList: Restaurant[];

  categories: Observable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.usersRef = this.af.list('users');
    this.usersObservable = this.usersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );

    this.restaurantsRef = this.af.list('restaurants');
    this.restaurantsObservable = this.restaurantsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );

    this.categoriesRef = this.af.list('categories');
    this.categoriesObservable = this.categoriesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );


    this.categories = af.list('categories').valueChanges();

    this.categories.subscribe( categories => {
      this.categoriesList = categories as string[];
    });

    this.restaurantsObservable.subscribe( restaurants => {
      this.restaurantList = restaurants as Restaurant[];
    });
  }

  updateUserProfile(user: UserModel){
    this.af.object('users/' + user.uid)
      .update(user);

  }

  getObservableUsers() {
    return this.usersObservable;
  }

  getObservableRestaurants() {
    return this.restaurantsObservable;
  }

  getCategoriesList(){
    return this.categoriesList;
  }

  getRestaurantList(){
    return this.restaurantList;
  }

}
