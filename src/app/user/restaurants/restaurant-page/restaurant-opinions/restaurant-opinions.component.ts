import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../shared/restaurant';

@Component({
  selector: 'app-restaurant-opinions',
  templateUrl: './restaurant-opinions.component.html',
  styleUrls: ['./restaurant-opinions.component.css']
})
export class RestaurantOpinionsComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
