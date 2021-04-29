import {RegistrationActionTypes} from './registration-action-types';
import {Action} from '@ngrx/store';



export class RegistrationRequestAction implements Action{
  readonly type = RegistrationActionTypes.ACTION_REGISTRATION_REQUEST;
  constructor(public payload: {}) {}
}

export class RegistrationSuccessAction implements Action{
  readonly type = RegistrationActionTypes.ACTION_REGISTRATION_SUCCESS;
  constructor(public payload: { message: any}) {}
}
export class RegistrationFailedAction implements Action{
  readonly type = RegistrationActionTypes.ACTION_REGISTRATION_FAIL;
  constructor(public payload: { error: any}) {}
}

