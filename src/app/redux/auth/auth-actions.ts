import {AuthActionTypes} from './auth-action-types';
import {Action} from '@ngrx/store';



export class LoginRequestAction implements Action{
  readonly type = AuthActionTypes.ACTION_LOGIN_REQUEST;
  constructor(public payload: {}) {}
}

export class LoginSuccessAction implements Action{
  readonly type = AuthActionTypes.ACTION_LOGIN_SUCCESS;
  constructor(public payload: { data: any}) {}
}
export class LoginFailedAction implements Action{
  readonly type = AuthActionTypes.ACTION_LOGIN_FAIL;
  constructor(public payload: { error: any}) {}
}

export class LogoutAction implements Action{
  readonly type = AuthActionTypes.ACTION_LOGOUT;
  constructor(public payload: {}) {}
}
