import {ActionReducerMap} from '@ngrx/store';
import {authReduces} from './auth/auth.reducer';
import {registrationReducer} from './registration/registration.reducer';
import {cartReducer} from './cart/cart.reducer';

export const reducers: ActionReducerMap<any> = {
  authState: authReduces,
  registrationState: registrationReducer,
  cartState: cartReducer
};
