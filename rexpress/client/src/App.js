import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import { Dashboard, View, Callback, GLogin } from './components/dashboard';
import Auth from './auth';

const auth = new Auth();

class App extends Component {
  state = {
    response: '',
  };
  componentDidMount() {}

  onClickGetIn = () => {
    this.callApi().then(response=>{
      console.log(response);
    });
  };
  callApi = async () => {
    const response = await fetch('/auth/test',{mode:'no-cors'});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
   
  };

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/dashboard">Dashboard</Link> |
          <Link to="/view">View</Link> |
          <Link to="/callback">Callback</Link> |
          <Link to="/glogin">Test</Link> 
        </div>

        <p className="App-intro">Response | {this.state.response}</p>
        <div>
          <button onClick={this.onClickGetIn}>Get In</button>
        </div>
        <div>
          <button>Get Out</button>
        </div>
        <hr />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/view" component={View} />
          <Route path="/callback" component={Callback} />
          <Route path="/glogin" component={GLogin} />
        </Switch>
      </div>
    );
  }
}

export default App;
