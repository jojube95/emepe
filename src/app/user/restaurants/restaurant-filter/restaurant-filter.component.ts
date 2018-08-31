import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../../shared/data-storage.service';
import {Category} from '../../../shared/category';

@Component({
  selector: 'app-restaurant-filter',
  templateUrl: './restaurant-filter.component.html',
  styleUrls: ['./restaurant-filter.component.css']
})
export class RestaurantFilterComponent implements OnInit {
  categoriesList: Category[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.categoriesList = this.dataStorageService.getCategoriesList();

  }

}
