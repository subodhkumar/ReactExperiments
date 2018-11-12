import { ActionTypes } from '../actions/action-types';

export default function(state = {}, action) {
  switch (action.type) {
    case ActionTypes.SELECT_ESTIMATE:
      return action.payload;
    default:
      return state;
  }
}
