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
import Results from './components/Results';

class Home extends Component {
  render() {
    return (
      <div className="homeComponent">
        <div className="logoDiv">
          <div className="logo" id="logo1" />
          <div className="logo" id="logo2" />
        </div>
        <div className="homeActon">
          <div
            className="qButton"
            onClick={() => this.props.history.replace(`/question`)}>
            Start Quiz!
          </div>
          <div
            className="qButton"
            onClick={() => this.props.history.replace(`/results`)}>
            Top Scores
          </div>
        </div>
      </div>
    );
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
      <div className="AppContainer">
        <div className="App">KPTCL & CESC Quiz</div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/question" component={Questions} />
          <Route path="/contact" component={Contact} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/results" component={Results} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
