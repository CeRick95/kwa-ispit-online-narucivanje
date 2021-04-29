import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import {ActionReducer, State, StoreModule} from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {reducers} from './redux';
import { storeLogger } from 'ngrx-store-logger';

import { AppComponent } from './app.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { AngularHelperPageComponent } from './containers/angular-helper-page/angular-helper-page.component';
import { AnonymousLinksComponent } from './components/navbar-links/anonymous-links/anonymous-links.component';
import { AuthorizedLinksComponent } from './components/navbar-links/authorized-links/authorized-links.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegistrationPageComponent } from './containers/registration-page/registration-page.component';
import { DashboardPageComponent } from './containers/private/dashboard-page/dashboard-page.component';
import { CardComponent } from './components/products/card/card.component';
import { CartPageComponent } from './containers/private/cart-page/cart-page.component';
import { CartItemComponent } from './components/products/cart-item/cart-item.component';

// AoT requires an exported function for factories
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function logger(reducer: ActionReducer<State<any>>): any {
  // default, no options
  return storeLogger()(reducer);
}
export const metaReducers =  [logger];
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
    DashboardPageComponent,
    CardComponent,
    CartPageComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
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
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    FormsModule
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})


export class AppModule { }
