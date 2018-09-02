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


const appRoutes: Routes = [
    { path: '', redirectTo: '/signIn', pathMatch: 'full'},
    { path : 'signUp', component: SignUpComponent},
    { path : 'signIn', component: SignInComponent},
    { path: 'signUpRestaurant', component: SignUpRestaurantComponent},
    { path: 'restaurant-details', component: RestaurantDetailComponent, canActivate: [AuthGuard]},
    { path: 'user', component: UserMainPageComponent, canActivate: [AuthGuard], children: [
        { path: 'restaurants', component: RestaurantsComponent, children: [
            {path: 'list', component: RestaurantFilterComponent, children: [

              ]},
            { path: ':uid', component: RestaurantPageComponent },
          ]},
        { path: 'account', component: AccountInformationComponent, canActivate: [AuthGuard]},
        { path: 'accountSettings', component: AccountSettingsComponent, canActivate: [AuthGuard], children: [
            { path: 'profile', component: AccountProfileSettingsComponent, canActivate: [AuthGuard]},
            { path: 'email', component: AccountEmailSettingsComponent, canActivate: [AuthGuard]},
            { path: 'password', component: AccountPasswordSettingsComponent, canActivate: [AuthGuard]}
          ]}
      ]},

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
