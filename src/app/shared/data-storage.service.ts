import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {UserModel} from './userModel';
import {map} from 'rxjs/operators';
import {Restaurant} from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  usersRef: AngularFireList<any>;
  restaurantsRef: AngularFireList<any>;

  usersObservable: Observable<UserModel[]>;
  restaurantsObservable: Observable<Restaurant[]>

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

}
