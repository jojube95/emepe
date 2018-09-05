import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {AuthService} from '../../auth/auth.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {Restaurant} from '../../shared/restaurant';

@Component({
  selector: 'app-restaurant-main-page',
  templateUrl: './restaurant-main-page.component.html',
  styleUrls: ['./restaurant-main-page.component.css']
})
export class RestaurantMainPageComponent implements OnInit {
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
