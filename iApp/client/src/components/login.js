import React, { Component } from 'react';
import { Text, Password } from './library/text';
import { Col, Col2 } from './library/grid';
import Button from './library/button';
import GoogleLogin from 'react-google-login';

const key = require('../keys/keys');

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  handleSignIn() {
    this.props.handleSignIn(this.state);
  }

  handleChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    const type = target.type;

    console.log('***STATE | ', name, ' /', value, ' / ', target.type);
    this.setState({
      [name]: type === 'date' ? value : value,
    });
  }
  render() {
    const onSuccess = data => {
      console.log('Success');
      console.log(data);
    };
    const onFailure = err => {
      console.log('Error');
      console.log(err);
    };

    let errorMsg = this.props.error ? <Col>Error: {this.props.error}</Col> : '';
    const divStyle = {
      minWidth: '400px',
      maxWidth: '600px',
      margin: ' 20vh auto',
    };
    return (
      <div style={divStyle}>
        <Col>
          <Text
            name="user_username"
            value="username"
            label="Username"
            onChange={this.handleChange}
          />
          <Password
            name="user_password"
            value="password"
            label="Password"
            onChange={this.handleChange}
          />
        </Col>
        {errorMsg}
        <Col2>
          {' '}
          <Button value="Sign In" onClick={this.handleSignIn} />
          <Button value="Sign Up" onClick={this.props.handleSignUp} />
        </Col2>
      </div>
    );
    /*return (
      <div>
        <Col>
          <Text
            value="username"
            label="Username"
            onChange={this.handleChange}
          />
          <Password
            value="password"
            label="Password"
            onChange={this.handleChange}
          />
          <Button />
        </Col>
        <Col>
          <GoogleLogin
            clientId={key.keys.google.ClientId}
            buttonText="Sign In using Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </Col>
      </div>
    ); */
  }
}

export default Login;
