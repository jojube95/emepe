import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {AuthService} from '../../../../auth/auth.service';
import {DataStorageService} from '../../../../shared/data-storage.service';
import {NgForm} from '@angular/forms';
import {Restaurant} from '../../../../shared/restaurant';

@Component({
  selector: 'app-restaurant-account-password-settings',
  templateUrl: './restaurant-account-password-settings.component.html',
  styleUrls: ['./restaurant-account-password-settings.component.css']
})
export class RestaurantAccountPasswordSettingsComponent implements OnInit {
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

  onUpdate(form: NgForm){
    //Update user email
    this.userAuth.updatePassword(form.value.password)
      .then( response => {
        this.restaurantLogged.password = form.value.password;
        this.dataStorageService.updateRestaurantProfile(this.restaurantLogged);

        this.authService.signOut();
      })
      .catch(error => {
        alert(error);
      });
  }
}
