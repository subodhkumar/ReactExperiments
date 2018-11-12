import { ActionTypes } from '../actions/action-types';

export default function(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_ROLES_BEGIN:
      return state;
    case ActionTypes.FETCH_ALL_ROLES_END:
      return action.payload.data;
    default:
      return state;
  }
}
