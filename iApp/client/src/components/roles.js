import React, { Component } from 'react';

export default class Roles extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.data.map((d, index) => <div>666</div>);
    return <div> Roles | {list}</div>;
  }
}
