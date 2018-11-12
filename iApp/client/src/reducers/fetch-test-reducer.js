import { ActionTypes } from '../actions/action-types';

export default function(state = { express: 'Initial' }, action) {
  /* console.log('In fetch-test reducer');
  switch (action.type) {
    case ActionTypes.REQUEST_SALES:
      console.log(' Waiting for data');
      return state;
    case ActionTypes.RECEIVE_SALES:
      console.log(' received the data ');
      return action.payload;
    default:
      return state;
  }*/
  return state;
}
