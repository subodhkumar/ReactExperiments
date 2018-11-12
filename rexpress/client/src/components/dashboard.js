import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}


class Dashboard extends Component {
  render() {
    return <div> Dashboard </div>;
  }
}

class View extends Component {
  render() {
    return <div> View </div>;
  }
}

class Callback extends Component {
  render() {
    return <div> Callback, | Loading.... </div>;
  }
}

class GLogin extends Component {
  render(){
    return (
      <GoogleLogin clientId="632557790583-c68mah3p4j7084uegco31vrfgd8l4740.apps.googleusercontent.compw" buttonText="Check" onSuccess={responseGoogle} onFailure={responseGoogle}/>
    )
  }
}

export { Dashboard, View, Callback, GLogin };
