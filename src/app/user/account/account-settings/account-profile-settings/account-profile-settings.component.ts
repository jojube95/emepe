import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {UserModel} from '../../../../shared/userModel';
import {DateUtilities} from '../../../../utilities/date-utilities';
import {AuthService} from '../../../../auth/auth.service';
import {DataStorageService} from '../../../../shared/data-storage.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-account-profile-settings',
  templateUrl: './account-profile-settings.component.html',
  styleUrls: ['./account-profile-settings.component.css'],

})
export class AccountProfileSettingsComponent implements OnInit {
  loading = true;
  userAuth: User;
  userLogged: UserModel;
  dateUtilities: DateUtilities = new DateUtilities();

  constructor(private authService: AuthService, private dataStorageService: DataStorageService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userAuth = this.authService.getCurrentUser();

    this.dataStorageService.getObservableUsers().subscribe(users => {
      this.userLogged = users.find(i => i.uid === this.userAuth.uid);
      this.userLogged.birthdayDate = this.dateUtilities.stringToDate(this.userLogged.birthday);
      this.loading = false;
    })
  }

  onUpdate(form: NgForm){
    let dateUtilities = new DateUtilities();

    this.userLogged.username = form.value.username;
    this.userLogged.name = form.value.name;
    this.userLogged.secondName = form.value.secondName;
    this.userLogged.phone = form.value.phone;
    this.userLogged.birthday = form.value.birthday;
    this.userLogged.birthdayDate = dateUtilities.stringFormToDate(form.value.birthday);
    this.userLogged.country = form.value.country;
    this.userLogged.location = form.value.location;

    this.dataStorageService.updateUserProfile(this.userLogged);
    this.router.navigate(['../../account'], {relativeTo: this.route});



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
