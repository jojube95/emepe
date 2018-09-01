import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../../shared/data-storage.service';
import {Category} from '../../../shared/category';
import {Restaurant} from '../../../shared/restaurant';
import {deepEqual} from 'assert';

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
