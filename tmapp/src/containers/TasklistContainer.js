import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TASK_FILTER } from '../actiontypes';
import Tasklist from '../components/Tasklist';
import { addTask } from '../actioncreators/TaskActionCreators';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case TASK_FILTER.NOT_STARTED:
      return tasks.filter(task => task.status === TASK_FILTER.NOT_STARTED);
    case TASK_FILTER.STARTED:
      return tasks.filter(task => task.status === TASK_FILTER.STARTED);
    case TASK_FILTER.FINISHED:
      return tasks.filter(task => task.status === TASK_FILTER.FINISHED);
    case TASK_FILTER.ALL:
    default:
      return tasks;
  }
};

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(state.tasks, state.filter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: task => {
      dispatch(addTask(task));
    },
  };
};

const TasklistContainer = connect(mapStateToProps, mapDispatchToProps)(
  Tasklist,
);

export default TasklistContainer;
