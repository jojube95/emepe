import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {Restaurant} from '../../../shared/restaurant';
import {AuthService} from '../../../auth/auth.service';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
  selector: 'app-restaurant-account-information',
  templateUrl: './restaurant-account-information.component.html',
  styleUrls: ['./restaurant-account-information.component.css']
})
export class RestaurantAccountInformationComponent implements OnInit {
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

}
