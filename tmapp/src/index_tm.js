import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers/TaskReducer';
import { fetchTasks } from './actioncreators/TaskActionCreators';

let store = createStore(taskReducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchTasks());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
