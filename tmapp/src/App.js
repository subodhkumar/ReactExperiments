import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import taskReducer from './reducers/TaskReducer';
import TasklistContainer from './containers/TasklistContainer';
import { addTask, filterTasks } from './actioncreators/TaskActionCreators';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasklistContainer />
      </div>
    );
  }
}

export default App;
