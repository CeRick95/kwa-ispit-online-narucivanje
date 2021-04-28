import {ActionReducerMap} from '@ngrx/store';
import {authReduces} from './auth/auth.reducer';

export const reducers: ActionReducerMap<any> = {
  authState: authReduces
};
