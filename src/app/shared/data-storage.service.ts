import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {UserModel} from './userModel';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  usersRef: AngularFireList<any>;
  usersObservable: Observable<UserModel[]>;

  constructor(private authService: AuthService, private af: AngularFireDatabase) {
    this.usersRef = this.af.list('users');
    this.usersObservable = this.usersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );
  }

  getObservableUsers() {
    return this.usersObservable;
  }

}
