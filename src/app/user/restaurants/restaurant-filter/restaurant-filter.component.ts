import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../../shared/data-storage.service';
import {Category} from '../../../shared/category';
import {Restaurant} from '../../../shared/restaurant';

@Component({
  selector: 'app-restaurant-filter',
  templateUrl: './restaurant-filter.component.html',
  styleUrls: ['./restaurant-filter.component.css']
})
export class RestaurantFilterComponent implements OnInit {
  categoriesList: Category[];
  selectedCategory: Category = new Category('Todas');
  restaurantList: Restaurant[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.categoriesList = this.dataStorageService.getCategoriesList();
    this.restaurantList = this.dataStorageService.getRestaurantList();
    console.log(this.restaurantList);
  }

  onSelectRadioButton(category: Category){
    this.restaurantList = this.dataStorageService.getRestaurantList();
    this.selectedCategory = category;
    let auxRestaurantList: Restaurant[] = [];

    if(this.selectedCategory != {value: 'Todas'}){

      for(let restaurant of this.restaurantList){
        if(restaurant.categories.includes(category)){
          auxRestaurantList.push(restaurant);
        }


      }

      this.restaurantList = auxRestaurantList;
    }

  }

}
