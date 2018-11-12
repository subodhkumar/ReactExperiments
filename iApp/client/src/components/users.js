import React, { Component } from 'react';
import { compose } from 'redux';

export default class Users extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.data.map((d, index) => <div key={index}> 456</div>);
    return <div> Users | {list}</div>;
  }
}
