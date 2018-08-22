import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {AuthService} from '../../auth/auth.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {Restaurant} from '../../shared/restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  loading = true;
  userAuth: User;
  restaurantLogged: Restaurant;

  constructor(private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.userAuth = this.authService.getCurrentUser();

    this.dataStorageService.getObservableRestaurants().subscribe(restaurants => {
      this.restaurantLogged = restaurants.find(i => i.uid === this.userAuth.uid);
      this.loading = false;
    })
  }


  logOut(){
    this.authService.signOut();
  }

}
