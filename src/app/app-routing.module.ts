import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component';
import {AngularHelperPageComponent} from './containers/angular-helper-page/angular-helper-page.component';
import {AnonymousGuard} from './guard/anonymous.guard';
import {AuthGuard} from './guard/auth-guard';
import {LoginPageComponent} from './containers/login-page/login-page.component';
import {RegistrationPageComponent} from './containers/registration-page/registration-page.component';
import {DashboardPageComponent} from './containers/private/dashboard-page/dashboard-page.component';

const routes: Routes = [
  { path: '' ,   component: HomePageComponent, canActivate: [AnonymousGuard]},
  { path: 'angular-helper' ,   component: AngularHelperPageComponent, canActivate: [AnonymousGuard]},
  { path: 'login', component: LoginPageComponent, canActivate: [AnonymousGuard]},
  { path: 'register', component: RegistrationPageComponent, canActivate: [AnonymousGuard]},
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AnonymousGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
