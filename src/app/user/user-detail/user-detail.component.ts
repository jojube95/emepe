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
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  logOut(){
    this.authService.signOut();
  }

}
