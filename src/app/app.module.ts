import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up-user/sign-up.component';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule, NgForm} from '@angular/forms';
import { AuthService} from './auth/auth.service';
import { RouterModule} from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { CommonModule} from '@angular/common';
import { BsDatepickerModule} from 'ngx-bootstrap';
import { CompareValidatorDirective } from './utilities/compare-validator.directive';
import { AuthGuard} from './auth/auth.guard';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { SignUpRestaurantComponent } from './restaurant/sign-up-restaurant/sign-up-restaurant.component';
import { UserMainPageComponent } from './user/user-main-page/user-main-page.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RestaurantsComponent } from './user/restaurants/restaurants.component';
import { RestaurantListComponent } from './user/restaurants/restaurant-list/restaurant-list.component';
import { RestaurantItemComponent } from './user/restaurants/restaurant-list/restaurant-item/restaurant-item.component';
import {UserRestaurantDetailComponent} from './user/restaurants/restaurant-detail/user-restaurant-detail.component';

export const firebaseCredentials = {
  apiKey: 'AIzaSyA2RfdXx_h3pDyUAHHUVNnnieuIsaXQgKs',
  authDomain: 'emepe-2b333.firebaseapp.com',
  databaseURL: 'https://emepe-2b333.firebaseio.com',
  projectId: 'emepe-2b333',
  storageBucket: 'emepe-2b333.appspot.com',
  messagingSenderId: '954245660505'
};

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    UserDetailComponent,
    CompareValidatorDirective,
    RestaurantDetailComponent,
    SignUpRestaurantComponent,
    UserMainPageComponent,
    RestaurantsComponent,
    RestaurantListComponent,
    RestaurantItemComponent,
    UserRestaurantDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseCredentials),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    NgbModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
