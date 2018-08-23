import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SignUpComponent} from './user/sign-up-user/sign-up.component';
import { SignInComponent} from './auth/sign-in/sign-in.component';
import { UserDetailComponent} from './user/user-detail/user-detail.component';
import { AuthGuard} from './auth/auth.guard';
import { SignUpRestaurantComponent} from './restaurant/sign-up-restaurant/sign-up-restaurant.component'
import { RestaurantDetailComponent} from './restaurant/restaurant-detail/restaurant-detail.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/signIn', pathMatch: 'full'},
    { path: 'user-details', component: UserDetailComponent, canActivate: [AuthGuard]},
    { path : 'signUp', component: SignUpComponent},
    { path : 'signIn', component: SignInComponent},
    { path: 'signUpRestaurant', component: SignUpRestaurantComponent},
    { path: 'restaurant-details', component: RestaurantDetailComponent, canActivate: [AuthGuard]}
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
