import { Component, OnInit } from '@angular/core';
import {DateUtilities} from '../../utilities/date-utilities';
import {UserModel} from '../../shared/userModel';
import {Restaurant} from '../../shared/restaurant';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-sign-up-restaurant',
  templateUrl: './sign-up-restaurant.component.html',
  styleUrls: ['./sign-up-restaurant.component.css']
})
export class SignUpRestaurantComponent implements OnInit {
  url: '';

  constructor(private authService: AuthService) { }

  onSignup(form: NgForm){

    const restaurant = new Restaurant(form.value.email, form.value.password, form.value.name,
      form.value.phone, form.value.country, form.value.location, form.value.description,
      '', 0.0, [], this.url);

    this.authService.singUpRestaurant(restaurant);
  }

  ngOnInit() {
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;

      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
