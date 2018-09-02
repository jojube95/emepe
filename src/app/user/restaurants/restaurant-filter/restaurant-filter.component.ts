import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../../shared/data-storage.service';
import {Category} from '../../../shared/category';
import {Restaurant} from '../../../shared/restaurant';
import {deepEqual} from 'assert';
import {NgbCheckBox} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-restaurant-filter',
  templateUrl: './restaurant-filter.component.html',
  styleUrls: ['./restaurant-filter.component.css']
})
export class RestaurantFilterComponent implements OnInit {
  categoriesList: string[];
  selectedCategory: string = 'Todas';
  restaurantList: Restaurant[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.categoriesList = this.dataStorageService.getCategoriesList();
    this.restaurantList = this.dataStorageService.getRestaurantList();


  }

  favoriteCheckboxChanged(checkBox: NgbCheckBox){
    this.restaurantList = this.dataStorageService.getRestaurantList();
    let auxRestaurantList: Restaurant[] = [];
    let userUid = this.dataStorageService.getCurrentUser().uid;
    if(checkBox.checked){
      for(let restaurant of this.restaurantList){
        if(restaurant.favedUsers != undefined){
          if(restaurant.favedUsers[userUid]){
            auxRestaurantList.push(restaurant);
          }
        }
      }
      this.restaurantList = auxRestaurantList;
    }


  }

  onSelectRadioButton(category: string){
    this.restaurantList = this.dataStorageService.getRestaurantList();
    this.selectedCategory = category;
    let auxRestaurantList: Restaurant[] = [];

    if(this.selectedCategory != 'Todas'){

      for(let restaurant of this.restaurantList){
        if(restaurant.categories.includes(category)){
          auxRestaurantList.push(restaurant);
        }


      }

      this.restaurantList = auxRestaurantList;
    }
    else{
      this.restaurantList = this.dataStorageService.getRestaurantList();
    }

  }

}
