import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Switch,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Questions from './components/QuestionComponent';

class Home extends Component {
  render() {
    return <div className="homeComponent"> Home </div>;
  }
}

class Contact extends Component {
  render() {
    return <div> Contact </div>;
  }
}

class Thanks extends Component {
  render() {
    return <div> Thanks</div>;
  }
}

class NoMatch extends Component {
  render() {
    return <div>404!</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div class="AppContainer">
        <div className="App">Welcome!</div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/question" component={Questions} />
          <Route path="/contact" component={Contact} />
          <Route path="/thanks" component={Thanks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
