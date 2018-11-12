import React, { Component } from 'react';
import SignUp from '../components/signup';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import { signUp } from '../actions';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
    console.log(' New State | ' + JSON.stringify(this.props.signUpData));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.signUpData && nextProps.signUpData.insertId) {
      this.handleCancel();
    }
  }
  handleSignUp(user) {
    if (user) {
      console.log('Signup requested');
      this.props.signUp(user);
    } else {
      console.log('Invalid Signup requested');
    }
  }
  handleCancel() {
    this.props.history.push('/login');
  }
  render() {
    return (
      <div>
        <div>{this.props.signUpData.insertId}</div>
        <SignUp
          handleSignUp={this.handleSignUp}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { signUpData: state.signUpData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUp: signUp }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpContainer),
);
