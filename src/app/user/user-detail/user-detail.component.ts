import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Item} from '../../auth/item';
import {AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  items: AngularFireList<Item[]> = null;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  createItem(body: string){
    console.log(body);
    console.log(this.authService.getUser());
    console.log(this.authService.getUserId());
    this.authService.createItem(new Item(body))
  }

  getItems(){
    this.items = this.authService.getItemsList();
  }

}
