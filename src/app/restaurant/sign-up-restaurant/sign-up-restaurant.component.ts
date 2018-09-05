import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../shared/restaurant';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {DataStorageService} from '../../shared/data-storage.service';
import {NgSelectComponent} from '@ng-select/ng-select';

@Component({
  selector: 'app-sign-up-restaurant',
  templateUrl: './sign-up-restaurant.component.html',
  styleUrls: ['./sign-up-restaurant.component.css']
})
export class SignUpRestaurantComponent implements OnInit {
  url: '../../../assets/img/restaurant.png';
  categoriesSelected: string[] = [];
  categories: string[];



  constructor(private authService: AuthService, private dataService: DataStorageService) {

  }

  onSignup(form: NgForm){

    const restaurant = new Restaurant(form.value.email, form.value.password, form.value.name,
      form.value.phone, form.value.country, form.value.location, form.value.description,
      '', 0.0, this.categoriesSelected, this.url);

    this.authService.singUpRestaurant(restaurant);
  }

  ngOnInit() {
    this.categories = this.dataService.getCategoriesList();

  }

  onAddItem(selector: NgSelectComponent){
    this.categoriesSelected = selector.itemsList.selectedItems.map(next => {
      return next["value"];
    });
    // console.log(selector);
  }

  onRemoveItem(selector: NgSelectComponent){
    this.categoriesSelected = selector.itemsList.selectedItems.map(next => {
      return next["value"];
    });
  }

  onClearItem(){
    this.categoriesSelected = [];
  }


  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;

      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
