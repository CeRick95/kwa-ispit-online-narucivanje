import {RegistrationActionTypes} from './registration-action-types';


const initialState: any = {};

export const registrationReducer = (registrationState = initialState, action): any => {
  switch (action.type) {
    case RegistrationActionTypes.ACTION_REGISTRATION_REQUEST:
      return {timestp: mTstamp()};
    case RegistrationActionTypes.ACTION_REGISTRATION_SUCCESS:
      return  {
        message: 'User successfully registered with email: ',
        timestp: mTstamp(),
        registered: true
      };
    case RegistrationActionTypes.ACTION_REGISTRATION_FAIL:
      return {
        error: action.payload.error
      };
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
