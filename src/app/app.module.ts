import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { AngularHelperPageComponent } from './containers/angular-helper-page/angular-helper-page.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AnonymousLinksComponent } from './components/navbar-links/anonymous-links/anonymous-links.component';
import { AuthorizedLinksComponent } from './components/navbar-links/authorized-links/authorized-links.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import { RegistrationPageComponent } from './containers/registration-page/registration-page.component';
import { DashboardPageComponent } from './containers/private/dashboard-page/dashboard-page.component';

// AoT requires an exported function for factories
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AngularHelperPageComponent,
    AnonymousLinksComponent,
    AuthorizedLinksComponent,
    FooterComponent,
    HeaderComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    FormsModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})


export class AppModule { }
