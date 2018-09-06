import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {AuthService} from '../../../../auth/auth.service';
import {DataStorageService} from '../../../../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Restaurant} from '../../../../shared/restaurant';

@Component({
  selector: 'app-restaurant-account-email-settings',
  templateUrl: './restaurant-account-email-settings.component.html',
  styleUrls: ['./restaurant-account-email-settings.component.css']
})
export class RestaurantAccountEmailSettingsComponent implements OnInit {
  loading = true;
  userAuth: User;
  restaurantLogged: Restaurant;

  constructor(private authService: AuthService, private dataStorageService: DataStorageService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userAuth = this.authService.getCurrentUser();

    this.dataStorageService.getObservableRestaurants().subscribe(users => {
      this.restaurantLogged = users.find(i => i.uid === this.userAuth.uid);
      this.loading = false;
    })
  }

  onUpdate(form: NgForm){
    //Update user email
    this.userAuth.updateEmail(form.value.email)
      .then( response => {
        this.restaurantLogged.mail = form.value.email;
        this.dataStorageService.updateRestaurantProfile(this.restaurantLogged);

        this.router.navigate(['../../accountInformation'], {relativeTo: this.route});
      })
      .catch(error => {
        alert(error);
      });



  }

}
