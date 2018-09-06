import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up-user/sign-up.component';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule, NgForm} from '@angular/forms';
import { AuthService} from './auth/auth.service';
import { RouterModule} from '@angular/router';
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
import { RestaurantListComponent } from './user/restaurants/restaurant-filter/restaurant-list/restaurant-list.component';
import { RestaurantItemComponent } from './user/restaurants/restaurant-filter/restaurant-list/restaurant-item/restaurant-item.component';
import { AccountInformationComponent } from './user/account/account-information/account-information.component';
import { AccountSettingsComponent } from './user/account/account-settings/account-settings.component';
import { AccountProfileSettingsComponent } from './user/account/account-settings/account-profile-settings/account-profile-settings.component';
import { AccountEmailSettingsComponent } from './user/account/account-settings/account-email-settings/account-email-settings.component';
import { AccountPasswordSettingsComponent } from './user/account/account-settings/account-password-settings/account-password-settings.component';
import { RestaurantFilterComponent } from './user/restaurants/restaurant-filter/restaurant-filter.component';
import { FilterPipe } from './shared/filter.pipe';
import { RestaurantPageComponent } from './user/restaurants/restaurant-page/restaurant-page.component';
import { RestaurantOffersComponent } from './user/restaurants/restaurant-page/restaurant-offers/restaurant-offers.component';
import { RestaurantOpinionsComponent } from './user/restaurants/restaurant-page/restaurant-opinions/restaurant-opinions.component';
import { RestaurantInformationComponent } from './user/restaurants/restaurant-page/restaurant-information/restaurant-information.component';
import {DataStorageService} from './shared/data-storage.service';
import {NgSelectModule} from '@ng-select/ng-select';
import { RestaurantMainPageComponent } from './restaurant/restaurant-main-page/restaurant-main-page.component';
import { RestaurantAccountInformationComponent } from './restaurant/account/restaurant-account-information/restaurant-account-information.component';
import { RestaurantAccountSettingsComponent } from './restaurant/account/restaurant-account-settings/restaurant-account-settings.component';
import { RestaurantAccountEmailSettingsComponent } from './restaurant/account/restaurant-account-settings/restaurant-account-email-settings/restaurant-account-email-settings.component';
import { RestaurantAccountPasswordSettingsComponent } from './restaurant/account/restaurant-account-settings/restaurant-account-password-settings/restaurant-account-password-settings.component';
import { RestaurantAccountProfileSettingsComponent } from './restaurant/account/restaurant-account-settings/restaurant-account-profile-settings/restaurant-account-profile-settings.component';
import { OffersListComponent } from './restaurant/offers-list/offers-list.component';
import { OfferEditComponent } from './restaurant/offers-list/offer-edit/offer-edit.component';

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
    CompareValidatorDirective,
    RestaurantDetailComponent,
    SignUpRestaurantComponent,
    UserMainPageComponent,
    RestaurantsComponent,
    RestaurantListComponent,
    RestaurantItemComponent,
    AccountInformationComponent,
    AccountSettingsComponent,
    AccountProfileSettingsComponent,
    AccountEmailSettingsComponent,
    AccountPasswordSettingsComponent,
    RestaurantFilterComponent,
    FilterPipe,
    RestaurantPageComponent,
    RestaurantOffersComponent,
    RestaurantOpinionsComponent,
    RestaurantInformationComponent,
    RestaurantMainPageComponent,
    RestaurantAccountInformationComponent,
    RestaurantAccountSettingsComponent,
    RestaurantAccountEmailSettingsComponent,
    RestaurantAccountPasswordSettingsComponent,
    RestaurantAccountProfileSettingsComponent,
    OffersListComponent,
    OfferEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseCredentials),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
  ],
  providers: [AuthService, AuthGuard, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
