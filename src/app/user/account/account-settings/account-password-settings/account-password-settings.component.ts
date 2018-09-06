import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from 'firebase';
import {UserModel} from '../../../../shared/userModel';
import {DateUtilities} from '../../../../utilities/date-utilities';
import {AuthService} from '../../../../auth/auth.service';
import {DataStorageService} from '../../../../shared/data-storage.service';

@Component({
  selector: 'app-account-password-settings',
  templateUrl: './account-password-settings.component.html',
  styleUrls: ['./account-password-settings.component.css']
})
export class AccountPasswordSettingsComponent implements OnInit {
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

  onUpdate(form: NgForm){
    //Update user email
    this.userAuth.updatePassword(form.value.password)
      .then( response => {
        this.userLogged.password = form.value.password;
        this.dataStorageService.updateUserProfile(this.userLogged);

        this.authService.signOut();
      })
      .catch(error => {
        alert(error);
      });
  }

}
