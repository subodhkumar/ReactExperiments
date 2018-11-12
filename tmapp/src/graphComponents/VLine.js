import React, { Component } from 'react';

class VLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'M ' + this.props.x + ' 0  V ' + this.props.x + ' ' + this.props.y,
    };
  }
  render() {
    return (
      <React.Fragment>
        <path
          d={this.state.data}
          r=".5"
          strokeWidth=".1"
          fill="none "
          stroke="gray "
          strokeOpacity=".5"
          strokeLinecap="round "
        />;
      </React.Fragment>
    );
  }
}

export default VLine;
