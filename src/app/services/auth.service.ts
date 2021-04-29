import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginFailedAction, LoginRequestAction, LoginSuccessAction, LogoutAction} from '../redux/auth/auth-actions';
import {mockService} from '../utils/MockService';
import {Router} from '@angular/router';
import {RegistrationFailedAction, RegistrationRequestAction, RegistrationSuccessAction} from '../redux/registration/registration-actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<any>, private router: Router) { }

  login(email: string , password: string): void{
    this.store.dispatch(new LoginRequestAction(
      { }
    ));
    mockService.login(email, password).then(
      data => {
        console.log(data);
        this.store.dispatch(new LoginSuccessAction(
          {data}
        ));
        localStorage.setItem('authToken', data.accessToken);
        localStorage.setItem('cart', JSON.stringify(data.cart));
        this.router.navigate(['/dashboard'], {replaceUrl: true});
      },
      rejected => {
        this.store.dispatch(new LoginFailedAction(
          { error: rejected }
        ));
      }
    );
  }

  logout(): void{
    localStorage.removeItem('authToken');
    localStorage.removeItem('cart');
    // this.router.navigate(['/login'], {replaceUrl: true});
    this.store.dispatch(new LogoutAction(
      {}
    ));
    window.location.replace('/login');
  }

  registration(json): void{
    this.store.dispatch(new RegistrationRequestAction({}));
    mockService.register(json).then(
      message => {
        this.store.dispatch(new RegistrationSuccessAction({message}));
        this.router.navigate(['/login'], {replaceUrl: true});
      },
      error => {
        this.store.dispatch(new RegistrationFailedAction({error}));
      }
    );

  }

   existsByEmail(email: string): Promise<boolean> {
    return mockService.existByEmail(email).then(
      exist => {
        console.log(exist);
        return Promise.resolve(exist);
      },
      error => {
        console.error(error);
        return Promise.reject(error);
      }
    );
  }
}
