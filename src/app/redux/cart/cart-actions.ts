import {CartActionTypes} from './cart-action-types';
import {Action} from '@ngrx/store';


export class AddToCartLocalAction implements Action{
  readonly type = CartActionTypes.ACTION_ADD_TO_CART_LOCAL;
  constructor(public payload: {data: any}) {}
}

export class RemoveFromCartLocalAction implements Action{
  readonly type = CartActionTypes.ACTION_REMOVE_FROM_CART_LOCAL;
  constructor(public payload: { data: any}) {}
}
export class CartUpdateRequestAction implements Action{
  readonly type = CartActionTypes.ACTION_UPDATE_CART_REQUEST;
  constructor(public payload: { }) {}
}

export class CartUpdateSuccessAction implements Action{
  readonly type = CartActionTypes.ACTION_UPDATE_CART_SUCCESS;
  constructor(public payload: { data: any}) {}
}
export class CartUpdateFailedAction implements Action{
  readonly type = CartActionTypes.ACTION_UPDATE_CART_FAILED;
  constructor(public payload: { error: any}) {}
}
