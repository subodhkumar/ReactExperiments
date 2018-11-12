import { ActionTypes } from '../actions/action-types';

export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.SIGN_UP_BEGIN:
      return state;
    case ActionTypes.SIGN_UP_END:
      console.log(' SignUp SUccess | ' + JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
}
