import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {UserModel} from '../../shared/userModel';
import { DateUtilities} from '../../utilities/date-utilities';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  url = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    console.log(form);
    let dateUtilities = new DateUtilities();

    const user = new UserModel(form.value.username, form.value.email,
      form.value.password, form.value.name, form.value.secondName,
      form.value.phone, dateUtilities.stringFormToDate(form.value.birthday), form.value.country,
      form.value.location, this.url);

    console.log(this.url);
    this.authService.signupUser(user);
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;

      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
