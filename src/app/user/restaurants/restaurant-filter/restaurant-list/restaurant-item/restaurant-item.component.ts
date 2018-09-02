import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../../shared/restaurant';
import {DataStorageService} from '../../../../../shared/data-storage.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
  @Input() restaurant: Restaurant;
  faved: Boolean;
  imgSrc: string;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    let userUid = this.dataStorageService.getCurrentUser().uid;
    if(this.restaurant.favedUsers != undefined){
      if(this.restaurant.favedUsers[userUid]){
        this.faved = true;
      }
    }

    this.faved ? this.imgSrc="../../../../../../assets/img/star-solid.svg" : this.imgSrc="../../../../../../assets/img/star-regular.svg";

  }

  onFavChange(){
    this.faved ? this.faved=false : this.faved=true;

    if(this.faved){
      this.dataStorageService.addFavoriteRestaurant(this.restaurant);
      this.imgSrc="../../../../../../assets/img/star-solid.svg";
    }
    else{
      this.dataStorageService.removeFavoriteRestaurant(this.restaurant);
      this.imgSrc="../../../../../../assets/img/star-regular.svg"
    }
  }

}
