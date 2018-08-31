import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../shared/restaurant';
import {DataStorageService} from '../../../../shared/data-storage.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  @Input() restaurantList: Restaurant[];


  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
    // this.dataStorage.getObservableRestaurants().subscribe( restaurants => {
    //   this.restaurantList = restaurants as Restaurant[];
    // });
    console.log();
  }

}
