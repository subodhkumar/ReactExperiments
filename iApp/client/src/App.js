import React, { Component } from 'react';

import './App.css';
//import Auth from './auth/auth';
import Header from './components/header';
import Main from './components/main';
import Callback from './components/callback';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';

import ComponentLibrary from './components/library/clibrary';

import EstimationDashboard from './components/dashboardEstimation';
import SalesDashboard from './components/dashboardSales';
import QuotesContainer from './containers/quote-container';
import SalesView from './containers/sales-view-container';
import EstimationContainer from './containers/estimation-container';
import LoginContainer from './containers/login-container';
import EstimationDetailContainer from './containers/estimation-detail-container';
import { Col12, Col } from './components/library/grid';
import { Container, Sidebar, TopBar } from './components/library/form';
import SignUpContainer from './containers/signup-container';
import UserManageContainer from './containers/user-manage-container';
import Button from './components/library/button';
import { login, logout } from './actions';
import AppHeader from './components/appHeader';
import { bindActionCreators } from 'redux';

/* Auth Handler */
/*TO DO | USE ASYNC METHOD */
const AppAuth = {
  //isAuthenticated: true,
  isAuthenticated(context) {
    console.log(
      'Auth Request | ',
      localStorage.getItem('iapp_user'),
      '/',
      localStorage.getItem('iapp_loginTime'),
    );

    if (
      localStorage.getItem('iapp_user') &&
      localStorage.getItem('iapp_loginTime') &&
      localStorage.getItem('iapp_role_code') &&
      context
    ) {
      let role_code = localStorage.getItem('iapp_role_code');
      if (role_code === 'admin' || context === 'all') {
        return true;
      } else if (
        (role_code === 'sales_lead' || role_code === 'sales_user') &&
        context === 'sales'
      ) {
        return true;
      } else if (
        (role_code === 'estimation_lead' || role_code === 'estimation_user') &&
        context === 'estimation'
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  authenticate(cb) {
    this.isAuthenticated = true;
    cb();
  },
  signOut(cb) {
    this.isAuthenticated = false;
    cb();
  },
};
/* Container */

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        AppAuth.isAuthenticated(rest.context) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

class App extends Component {
  //auth = new Auth();
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {}
  handleLogout() {
    if (this.props.loginData && this.props.loginData.user_token) {
      this.props.logout();
      //this.props.history.push('/login');
    }
  }

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
    // this.callAuthApi()
    //   .then(res => this.setState({ authResponse: res.express }))
    //   .catch(err => console.log(err));
    console.log('**** APP | ' + JSON.stringify(this.state));
  }

  /*callAuthApi = async () => {
    const response = await fetch('/api/authContent');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }; */

  renderApp() {
    if (this.props.loginData && this.props.loginData.user_token) {
      let role_code = this.props.loginData.user_role_code;

      if (role_code === 'estimation_lead' || role_code === 'estimation_user') {
        return <Redirect to="/estimationDashboard" />;
      } else if (role_code === 'sales_lead' || role_code === 'sales_user') {
        return <Redirect to="/estimationDashboard" />;
      } else {
        return <Redirect to="/signup" />;
      }
    } else {
      return <div> No Role </div>;
    }
  }

  render() {
    const optionList = [
      /*{ to: '/', label: 'Home' },
      { to: '/main', label: 'Main' },
      { to: '/callback', label: 'Callback' },
      { to: '/library', label: 'Library' },*/
      { to: '/signup', label: 'Sign Up' },
      { to: '/login', label: 'Login' },
      { to: '/salesDashboard', label: 'Sales Dashboard' },
      { to: '/estimationDashboard', label: 'Estimation Dashboard' },
      { to: '/manage-users', label: 'Manage Users' },

      /*{ to: '/estimation', label: 'Estimation' },
      { to: '/estimationDetail', label: 'Estimation Detail' },
      { to: '/sales', label: 'Sales' },
      { to: '/quote', label: 'Quote' },*/
    ];

    // <Sidebar options={optionList} />
    return (
      <div className="App">
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Raleway:400,600,700');
        </style>

        <AppHeader onLogin={this.props.login} onLogout={this.handleLogout} />

        <Container>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/main" component={Main} />
            <Route path="/callback" component={Callback} />
            <Route path="/library" component={ComponentLibrary} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route path="/login" component={LoginContainer} />

            <PrivateRoute
              context="sales"
              path="/salesDashboard"
              component={SalesDashboard}
            />
            <PrivateRoute
              context="estimation"
              path="/estimationDashboard"
              component={EstimationDashboard}
            />

            <PrivateRoute
              context="sales"
              path="/sales/"
              component={SalesView}
            />
            <PrivateRoute
              context="all"
              path="/quote/"
              component={QuotesContainer}
            />
            <PrivateRoute
              context="estimation"
              path="/estimation/"
              component={EstimationContainer}
            />
            <PrivateRoute
              context="estimation"
              path="/estimationDetail/"
              component={EstimationDetailContainer}
            />
            <PrivateRoute
              context="admin"
              path="/manage-users"
              component={UserManageContainer}
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loginData: state.loginData };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, logout }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

/* FLOW

User Logs In / Session Exists
Get His Role
Enable the links as per the Role
Show up the application

Have the Role check at each page level

*/
