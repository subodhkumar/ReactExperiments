import { TASK_ACTION } from '../actiontypes';

function addTask(task) {
  return {
    type: TASK_ACTION.ADD,
    payload: task,
  };
}

function startTask(task) {
  return {
    type: TASK_ACTION.START,
    payload: task,
  };
}

function finishTask(task) {
  return {
    type: TASK_ACTION.FINISH,
    payload: task,
  };
}

function deleteTask(task) {
  return {
    type: TASK_ACTION.DELETE,
    payload: task,
  };
}

function filterTasks(filter) {
  return {
    type: TASK_ACTION.SET_FILTER,
    payload: filter,
  };
}

function requestTasks() {
  return {
    type: TASK_ACTION.REQUEST,
    payload: '',
  };
}

function receiveTasks(json) {
  return {
    type: TASK_ACTION.RECEIVE,
    payload: {
      data: json,
      receivedAt: Date.now(),
    },
  };
}

/* THUNK CALLS */

function fetchTasks() {
  return function(dispatch) {
    dispatch(requestTasks());
    //let url = 'https://jsonplaceholder.typicode.com/posts';
    let url = 'http://localhost:5000/api/task';
    return fetch(url)
      .then(
        response => {console.log('Response | '+response);return response.json()},
        error => console.log('Error in fecthTasks'),
      )
      .then(json => dispatch(receiveTasks(json)));
  };
}

/* EXPORT SECTION */
export {
  addTask,
  startTask,
  finishTask,
  deleteTask,
  filterTasks,
  requestTasks,
  receiveTasks,
  fetchTasks,
};
