import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SignUpComponent} from './user/sign-up-user/sign-up.component';
import { SignInComponent} from './auth/sign-in/sign-in.component';
import { AuthGuard} from './auth/auth.guard';
import { SignUpRestaurantComponent} from './restaurant/sign-up-restaurant/sign-up-restaurant.component'
import { RestaurantDetailComponent} from './restaurant/restaurant-detail/restaurant-detail.component';
import {UserMainPageComponent} from './user/user-main-page/user-main-page.component';
import {RestaurantsComponent} from './user/restaurants/restaurants.component';
import {AccountInformationComponent} from './user/account/account-information/account-information.component';
import {AccountSettingsComponent} from './user/account/account-settings/account-settings.component';
import {AccountProfileSettingsComponent} from './user/account/account-settings/account-profile-settings/account-profile-settings.component';
import {AccountEmailSettingsComponent} from './user/account/account-settings/account-email-settings/account-email-settings.component';
import {AccountPasswordSettingsComponent} from './user/account/account-settings/account-password-settings/account-password-settings.component';
import {RestaurantFilterComponent} from './user/restaurants/restaurant-filter/restaurant-filter.component';
import {RestaurantPageComponent} from './user/restaurants/restaurant-page/restaurant-page.component';
import {RestaurantInformationComponent} from './user/restaurants/restaurant-page/restaurant-information/restaurant-information.component';
import {RestaurantMainPageComponent} from './restaurant/restaurant-main-page/restaurant-main-page.component';
import {RestaurantAccountInformationComponent} from './restaurant/account/restaurant-account-information/restaurant-account-information.component';
import {RestaurantAccountSettingsComponent} from './restaurant/account/restaurant-account-settings/restaurant-account-settings.component';
import {RestaurantAccountProfileSettingsComponent} from './restaurant/account/restaurant-account-settings/restaurant-account-profile-settings/restaurant-account-profile-settings.component';
import {RestaurantAccountEmailSettingsComponent} from './restaurant/account/restaurant-account-settings/restaurant-account-email-settings/restaurant-account-email-settings.component';
import {RestaurantAccountPasswordSettingsComponent} from './restaurant/account/restaurant-account-settings/restaurant-account-password-settings/restaurant-account-password-settings.component';
import {OffersListComponent} from './restaurant/offers-list/offers-list.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/signIn', pathMatch: 'full'},
    { path : 'signUp', component: SignUpComponent},
    { path : 'signIn', component: SignInComponent},
    { path: 'signUpRestaurant', component: SignUpRestaurantComponent},
    { path: 'restaurant', component: RestaurantMainPageComponent, canActivate: [AuthGuard], children: [
        { path: 'offers', component: OffersListComponent},
        { path: 'accountInformation', component: RestaurantAccountInformationComponent},
        { path: 'accountSettings', component: RestaurantAccountSettingsComponent, canActivate: [AuthGuard], children: [
            { path: 'profile', component: RestaurantAccountProfileSettingsComponent, canActivate: [AuthGuard]},
            { path: 'email', component: RestaurantAccountEmailSettingsComponent, canActivate: [AuthGuard]},
            { path: 'password', component: RestaurantAccountPasswordSettingsComponent, canActivate: [AuthGuard]}
          ]},
        { path: ':uid', component: RestaurantPageComponent, children: [
            {path: 'information/:params', component: RestaurantInformationComponent}
          ] },
      ]},
    { path: 'user', component: UserMainPageComponent, canActivate: [AuthGuard], children: [
        { path: 'restaurants', component: RestaurantsComponent, children: [
            {path: 'list', component: RestaurantFilterComponent, children: [
              ]},
            { path: ':uid', component: RestaurantPageComponent, children: [
                {path: 'information/:params', component: RestaurantInformationComponent}
              ] },
          ]},
        { path: 'account', component: AccountInformationComponent, canActivate: [AuthGuard]},
        { path: 'accountSettings', component: AccountSettingsComponent, canActivate: [AuthGuard], children: [
            { path: 'profile', component: AccountProfileSettingsComponent, canActivate: [AuthGuard]},
            { path: 'email', component: AccountEmailSettingsComponent, canActivate: [AuthGuard]},
            { path: 'password', component: AccountPasswordSettingsComponent, canActivate: [AuthGuard]}
          ]}
      ]},
    { path: 'information/:restaurant', component: RestaurantInformationComponent}

  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
