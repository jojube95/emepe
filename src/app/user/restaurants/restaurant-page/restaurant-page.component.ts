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

  showOffers = true;
  showOpinions = false;
  showInformation = false;

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

  addRestaurantToFavorite(){
    this.dataStorage.addFavoriteRestaurant(this.restaurant);
  }

  removeRestaurantFromFavorite(){
    this.dataStorage.removeFavoriteRestaurant(this.restaurant);
  }

  onClickOffers(){
    this.showOffers = true;
    this.showOpinions = false;
    this.showInformation = false;
  }

  onClickOpinions(){
    this.showOffers = false;
    this.showOpinions = true;
    this.showInformation = false;
  }

  onClickInformation(){
    this.showOffers = false;
    this.showOpinions = false;
    this.showInformation = true;
  }

}
