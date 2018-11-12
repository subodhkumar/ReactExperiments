import React, { Component } from 'react';
import Login from '../components/login';
import { bindActionCreators, compose } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import { withRouter, Redirect } from 'react-router-dom';
import { login } from '../actions/index';
import { Col } from '../components/library/grid';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    console.log('**** Login | ' + JSON.stringify(nextProps));
    if (nextProps.loginData && nextProps.loginData.user_token) {
      this.setState({
        error: 'Success',
      });
      this.props.history.push('/salesDashboard');
    } else {
      this.setState({
        error: 'Invalid Credentials',
      });
    }
  }
  handleSignIn(user) {
    if (!user || !user.user_username || !user.user_password) {
      this.setState({
        error: 'Invalid Credentials',
      });
    } else {
      this.props.login(user);
      console.log(JSON.stringify(user));
    }
  }
  handleSignUp() {
    this.props.history.push('/signup');
  }

  renderView() {
    console.log(
      '**** LOGIN REDUCER DATA | ' + JSON.stringify(this.props.loginData),
    );
    // const userRole = localStorage.getItem('iapp_role_code');
    // const userToken = localStorage.getItem('iapp_user');
    if (
      this.props.loginData &&
      this.props.loginData.user_token &&
      this.props.loginData.user_role_code
    ) {
      const userRole = this.props.loginData.user_role_code;
      const userToken = this.props.loginData.user_token;
      console.log('*** LOGIN ROLE CODE *** ', userRole);
      if (userRole === 'admin') {
        return <Redirect to="/salesDashboard" />;
      } else if (userRole === 'sales_lead' || userRole === 'sales_user') {
        return <Redirect to="/salesDashboard" />;
      } else if (
        userRole === 'estimation_lead' ||
        userRole === 'estimation_user'
      ) {
        return <Redirect to="/estimationDashboard" />;
      } else {
        return <div> 404 </div>;
      }
    } else {
      return (
        <div>
          <Login
            handleSignIn={this.handleSignIn}
            handleSignUp={this.handleSignUp}
            error={this.state.error}
          />
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}

function mapStateToProps(state) {
  return { loginData: state.loginData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer),
);
