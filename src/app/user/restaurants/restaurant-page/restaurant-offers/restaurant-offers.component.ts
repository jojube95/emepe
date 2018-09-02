import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../shared/restaurant';

@Component({
  selector: 'app-restaurant-offers',
  templateUrl: './restaurant-offers.component.html',
  styleUrls: ['./restaurant-offers.component.css']
})
export class RestaurantOffersComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
