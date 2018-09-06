import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {AuthService} from '../../../../auth/auth.service';
import {DataStorageService} from '../../../../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Restaurant} from '../../../../shared/restaurant';
import {NgSelectComponent} from '@ng-select/ng-select';

@Component({
  selector: 'app-restaurant-account-profile-settings',
  templateUrl: './restaurant-account-profile-settings.component.html',
  styleUrls: ['./restaurant-account-profile-settings.component.css']
})
export class RestaurantAccountProfileSettingsComponent implements OnInit {
  loading = true;
  userAuth: User;
  restaurantLogged: Restaurant;
  categories: string[];
  categoriesSelected: string[] = [];


  constructor(private authService: AuthService, private dataStorageService: DataStorageService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userAuth = this.authService.getCurrentUser();
    this.categories = this.dataStorageService.getCategoriesList();

    this.dataStorageService.getObservableRestaurants().subscribe(restaurants => {
      this.restaurantLogged = restaurants.find(i => i.uid === this.userAuth.uid);
      this.categoriesSelected = this.restaurantLogged.categories;
      this.loading = false;
    })
  }

  onUpdate(form: NgForm){

    this.restaurantLogged.name = form.value.name;
    this.restaurantLogged.categories = this.categoriesSelected;
    this.restaurantLogged.description = form.value.description;
    this.restaurantLogged.phone = form.value.phone;
    this.restaurantLogged.country = form.value.country;
    this.restaurantLogged.location = form.value.location;

    this.dataStorageService.updateRestaurantProfile(this.restaurantLogged);
    this.router.navigate(['../../accountInformation'], {relativeTo: this.route});



  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.restaurantLogged.pic = event.target.result;

      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onAddItem(selector: NgSelectComponent){
    this.categoriesSelected = selector.itemsList.selectedItems.map(next => {
      return next["value"];
    });
  }

  onRemoveItem(selector: NgSelectComponent){
    this.categoriesSelected = selector.itemsList.selectedItems.map(next => {
      return next["value"];
    });
  }

  onClearItem(){
    this.categoriesSelected = [];
  }


}
