import {CartActionTypes} from './cart-action-types';


const initialState: any = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :  [];

export const cartReducer = (registrationState = initialState, action): any => {

  let newCart;
  switch (action.type) {
    case CartActionTypes.ACTION_ADD_TO_CART_LOCAL:
      console.log(registrationState);
      console.log(action.payload.data);
      newCart = Object.assign([], registrationState);
      newCart.push(action.payload.data);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    case CartActionTypes.ACTION_REMOVE_FROM_CART_LOCAL:
      newCart = Object.assign([], registrationState);
      console.log('Current cart: ' + newCart);
      const index = newCart.findIndex(x => x === action.payload.data);
      newCart.splice(index, 1);
      console.log('After removal cart: ' + newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    default:
      return registrationState;
  }
};

// Move this as part for component or service.
// tslint:disable-next-line:typedef
export function mTstamp() {
  const d = new Date();
  let mMonth;
  if (d.getMonth() < 10) {
    mMonth = '0' + d.getMonth();
  } else {
    mMonth = d.getMonth();
  }
  let mDate;
  if (d.getDate() < 10) {
    mDate = '0' + d.getDate();
  } else {
    mDate = d.getDate();
  }
  let mHours;
  if (d.getHours() < 10) {
    mHours = '0' + d.getHours();
  } else {
    mHours = d.getHours();
  }
  let mMins;
  if (d.getMinutes() < 10) {
    mMins = '0' + d.getMinutes();
  } else {
    mMins = d.getMinutes();
  }
  let mSecs;
  if (d.getSeconds() < 10) {
    mSecs = '0' + d.getSeconds();
  } else {
    mSecs = d.getSeconds();
  }
  const mTimeStamp =
    d.getFullYear() +
    '-' +
    mMonth +
    '-' +
    mDate +
    ' ' +
    mHours +
    ':' +
    mMins +
    ':' +
    mSecs;
  console.log('mTimeStamp: ', mTimeStamp);
  return mTimeStamp;
}
