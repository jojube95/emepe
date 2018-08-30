import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {UserModel} from '../../../../shared/userModel';
import {DateUtilities} from '../../../../utilities/date-utilities';
import {AuthService} from '../../../../auth/auth.service';
import {DataStorageService} from '../../../../shared/data-storage.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-account-profile-settings',
  templateUrl: './account-profile-settings.component.html',
  styleUrls: ['./account-profile-settings.component.css']
})
export class AccountProfileSettingsComponent implements OnInit {
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

  onSignup(form: NgForm){
    // let dateUtilities = new DateUtilities();
    //
    // const user = new UserModel(form.value.username, form.value.email,
    //   form.value.password, form.value.name, form.value.secondName,
    //   form.value.phone, dateUtilities.stringFormToDate(form.value.birthday), form.value.country,
    //   form.value.location, this.url);
    //
    // this.authService.signupUser(user);

    //Update user on database
    //Search the user with the logged email in database
    //Update user
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.userLogged.pic = event.target.result;

      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
