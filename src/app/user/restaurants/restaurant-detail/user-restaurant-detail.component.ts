import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../../shared/restaurant';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class UserRestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  id: number;
  loading = true;

  constructor(private router: Router, private route: ActivatedRoute, private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.dataStorage.getObservableRestaurants().subscribe( restaurants => {
          this.restaurant = restaurants[this.id];
          this.loading = false;
        });
      }
    );
  }

}
