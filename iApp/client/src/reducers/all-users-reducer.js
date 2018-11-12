import { ActionTypes } from '../actions/action-types';

export default function(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_USERS_BEGIN:
      return [];
    case ActionTypes.FETCH_ALL_USERS_END:
      return action.payload.data;
    default:
      return state;
  }
}
