import React, { Component } from 'react';
import { Col, Col2 } from './library/grid';
import Button from './library/button';
import { Text, Password, Email } from './library/text';
import { H3 } from './library/form';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

    this.setError = this.setError.bind(this);
  }

  componentDidMount() {
    console.log('Sales View Mounted ' + JSON.stringify(this.props.data));
  }
  setError(msg) {
    this.setState({
      error: msg,
    });
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

  handleSignUp() {
    //console.log('STATE | ' + JSON.stringify(this.state));

    if (Object.keys(this.state).length < 5) {
      this.setState({
        error: 'Please fill the form',
      });
    } else {
      let user = this.state;

      if (!user.user_name || user.user_name.length < 1) {
        this.setError('Invalid Name');
      } else if (!user.user_email || user.user_email.length < 1) {
        this.setError('Invalid email');
      } else if (!user.user_username || user.user_username.length < 1) {
        this.setError('Invalid username');
      } else if (!user.user_password || user.user_password.length < 1) {
        this.setError('Invalid Password');
      } else if (!user.user_cpassword || user.user_cpassword.length < 1) {
        this.setError('Invalid Password');
      } else if (user.user_password !== user.user_cpassword) {
        this.setError('Passwords Dont match');
      } else {
        this.setState({
          error: '',
        });
        delete this.state.error;
        delete this.state.user_cpassword;
        this.props.handleSignUp(this.state);
      }
    }
  }

  render() {
    let ErrorSection = this.state.error ? (
      <Col> Error Here : {this.state.error}</Col>
    ) : (
      ''
    );
    return (
      <div>
        <H3>Sign Up</H3>
        {ErrorSection}
        <Col>
          <Text
            value=""
            name="user_name"
            label="Name"
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Email
            value=""
            name="user_email"
            label="Email"
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Text
            value=""
            name="user_username"
            label="Username"
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Password
            value=""
            name="user_password"
            label="Password"
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <Password
            value=""
            name="user_cpassword"
            label="Confirm Password"
            onChange={this.handleChange}
          />
        </Col>

        <Col2>
          <Button value="Signup" onClick={this.handleSignUp} />
          <Button value="Cancel" onClick={this.props.handleCancel} />
        </Col2>
      </div>
    );
  }
}
