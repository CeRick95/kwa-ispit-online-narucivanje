import {AuthActionTypes} from './auth-action-types';




const initialState: any = {};


export const authReduces = (userState = initialState, action): any => {
  switch (action.type) {
    case AuthActionTypes.ACTION_LOGIN_REQUEST:
      return {timestp: mTstamp()};
    case AuthActionTypes.ACTION_LOGIN_SUCCESS:
      return  {
                accessToken: action.data.accessToken,
                tokenType: action.data.tokenType,
                tokenExp: action.data.tokenExp,
                timestp: mTstamp()
              };
    case AuthActionTypes.ACTION_LOGIN_FAIL:
      return {
        error: action.error
      };
    case AuthActionTypes.ACTION_LOGOUT:
     return {};
    default:
      return userState;
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
