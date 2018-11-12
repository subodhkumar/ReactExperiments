import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { logout } from '../actions';
import { TopBar, H2, H1, H4 } from './library/form';
import { Col, Col2, Col3, Col4 } from './library/grid';
import Button from './library/button';
import connect from 'react-redux/lib/connect/connect';
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    console.log('LogOut Clicked!!!');
    // localStorage.removeItem('iapp_user');
    // this.props.history.replace('/login');
    this.props.onLogout();
  }
  handleLogin() {
    console.log('LogIn Clicked!!!');
    // localStorage.removeItem('iapp_user');
    // this.props.history.replace('/login');
    this.props.onLogin();
  }

  renderView() {
    if (this.props.loginData && this.props.loginData.user_token) {
      return <Button value="Log Out" onClick={this.handleLogout} />;
    } else {
      return null;
    }
  }

  render() {
    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
    };
    return (
      <TopBar>
        <Col2>
          <Col>
            {' '}
            <H1 white>Apex</H1>{' '}
          </Col>
          <Col4 center>
            <div>
              <Link style={linkStyle} to="/salesDashboard">
                {' '}
                Sales{' '}
              </Link>
            </div>
            <div>
              {' '}
              <Link style={linkStyle} to="/estimationDashboard">
                {' '}
                Estimation{' '}
              </Link>{' '}
            </div>
            <div>
              {' '}
              <Link style={linkStyle} to="/manage-users">
                {' '}
                Users{' '}
              </Link>{' '}
            </div>
            <div>{this.renderView()}</div>
          </Col4>
        </Col2>
      </TopBar>
    );
  }
}

function mapStateToProps(state) {
  return { loginData: state.loginData };
}
export default withRouter(connect(mapStateToProps)(AppHeader));
