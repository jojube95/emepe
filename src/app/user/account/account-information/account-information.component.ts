import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {UserModel} from '../../../shared/userModel';
import {DateUtilities} from '../../../utilities/date-utilities';
import {AuthService} from '../../../auth/auth.service';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit {
  loading = true;
  userAuth: User;
  userLogged: UserModel;
  dateUtilities: DateUtilities = new DateUtilities();

  constructor(private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.userAuth = this.authService.getCurrentUser();

    this.dataStorageService.getObservableUsers().subscribe(users => {
      this.userLogged = users.find(i => i.uid === this.userAuth.uid);
      this.userLogged.birthdayDate = this.dateUtilities.stringToDate(this.userLogged.birthday);
      this.loading = false;
    })
  }

}
