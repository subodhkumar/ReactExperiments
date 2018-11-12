import { ActionTypes } from '../actions/action-types';

export default function(state = {}, action) {
  console.log('In Active Sales Reducer |' + action.type);
  switch (action.type) {
    case ActionTypes.SELECT_SALES:
      console.log('In SELECT_SALES');
      return action.payload;

    case ActionTypes.ADD_SALES:
      console.log('In SELECT_SALES');
      return action.payload;
    /*
        return Object.assign({},state,{
            isFetching: false,
            didInvalidate:false,
            data:action.payload
        })
      */

    default:
      return state;
  }
}
