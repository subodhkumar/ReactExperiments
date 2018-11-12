import { ActionTypes } from '../actions/action-types';
export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOG_IN_BEGIN:
      return state;
    case ActionTypes.LOG_IN_END:
      return action.payload;
    case ActionTypes.LOG_IN_FAIL:
      return action.payload;
    case ActionTypes.LOG_OUT_BEGIN:
      return action.payload;
    case ActionTypes.LOG_OUT_END:
      return action.payload;
    default:
      const userToken = localStorage.getItem('iapp_user');
      const userCode = localStorage.getItem('iapp_role_code');
      const stateObj = { user_token: userToken, user_role_code: userCode };
      return stateObj;
  }
}
