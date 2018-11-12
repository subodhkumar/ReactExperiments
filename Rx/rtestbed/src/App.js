import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './polyfills';

class Espassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      actualValue: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.skip = false;
  }
  onKeyDown = e => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      this.skip = true;
    } else {
      this.skip = false;
    }
    console.log(
      `*** ${e.target.value} | ${e.keyCode} | ${e.charCode} | ${
        e.which
      } | keyDown`,
    );
  };
  onChange = e => {
    fetch('./test')
      .then(res => {
        console.log(' #1 INSIDE THEN ');
        return 'then';
      })
      .catch(err => {
        console.log('#2 ERROR ');
      })
      .finally(() => {
        console.log('#3 FINALLY');
      })
      .es_finally(() => {
        console.log('#4 ES_FINALLY');
      });
    console.log(
      `*** ${e.target.value} | ${e.keyCode} | ${e.charCode} | ${
        e.which
      } | Change`,
    );
    let val = e.target.value.slice(-1);

    if (!this.skip) {
      this.setState(prevState => ({
        actualValue: prevState.actualValue.concat(val),
        displayValue: prevState.displayValue.concat('#'),
      }));
    } else {
      this.setState(prevState => ({
        actualValue: prevState.actualValue.slice(0, -1),
        displayValue: prevState.displayValue.slice(0, -1),
      }));
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.displayValue}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <span>{this.state.actualValue}</span>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ marginTop: '20px' }}>
          <Espassword />
        </div>
      </div>
    );
  }
}

export default App;
