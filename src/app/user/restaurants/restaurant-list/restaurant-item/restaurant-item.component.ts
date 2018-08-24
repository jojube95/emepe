import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../shared/restaurant';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
