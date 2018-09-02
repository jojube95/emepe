import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../shared/restaurant';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {
  restaurant: Restaurant;
  uid: string;
  loading = true;

  constructor(private router: Router, private route: ActivatedRoute, private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.uid = params['uid'];
        this.dataStorage.getRestaurantObservableByUid(this.uid).subscribe( next =>{
          this.restaurant = next as Restaurant;
          this.loading = false;
        });


      }
    );
  }

}
