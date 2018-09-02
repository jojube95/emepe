import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../shared/restaurant';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurant-information',
  templateUrl: './restaurant-information.component.html',
  styleUrls: ['./restaurant-information.component.css']
})
export class RestaurantInformationComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
