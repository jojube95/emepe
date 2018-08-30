import { Component, OnInit } from '@angular/core';
import {User} from 'firebase';
import {UserModel} from '../../../../shared/userModel';
import {DateUtilities} from '../../../../utilities/date-utilities';
import {AuthService} from '../../../../auth/auth.service';
import {DataStorageService} from '../../../../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-account-email-settings',
  templateUrl: './account-email-settings.component.html',
  styleUrls: ['./account-email-settings.component.css']
})
export class AccountEmailSettingsComponent implements OnInit {
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
    //Update user email
    this.userAuth.updateEmail(form.value.email)
      .then( response => {
        this.userLogged.mail = form.value.email;
        this.dataStorageService.updateUserProfile(this.userLogged);

        this.router.navigate(['../../account'], {relativeTo: this.route});
      })
      .catch(error => {
        alert(error);
      });



  }

}
