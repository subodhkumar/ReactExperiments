import { TASK_ACTION, TASK_FILTER } from '../actiontypes';
import { combineReducers } from 'redux';

const defTaskList = [{ description: 'task#1', status: '' }];

function tasks(state = defTaskList, action) {
  switch (action.type) {
    case TASK_ACTION.ADD:
    case TASK_ACTION.START:
    case TASK_ACTION.FINISH:
    case TASK_ACTION.DELETE:
      console.log('# TASK REDUCER CALLED WITH ACTION | ', action.type);
      return state;
    case TASK_ACTION.REQUEST:
      console.log('# TASK REDUCER | REQUEST ');
      return state;
    case TASK_ACTION.RECEIVE:
      console.log(
        '# TASK REDUCER | RECEIVE | DATA | ' + JSON.stringify(action.payload),
      );
      state = action.payload.data.map((item, index) => {
        return {
          id: index,
          description: item.title,
          status: 'NOT STARTED',
        };
      });
      return state;
    default:
      return state;
  }
}

function filter(state = TASK_FILTER.ALL, action) {
  switch (action.type) {
    case TASK_ACTION.SET_FILTER:
      console.log('TASK FILTER REDUCER CALLED WITH ACTION | ' + action.type);
      return state;
    default:
      return state;
  }
}

const taskReducer = combineReducers({
  filter,
  tasks,
});

export default taskReducer;
