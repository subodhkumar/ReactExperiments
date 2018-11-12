import React, { Component } from 'react';

class HLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'M 0 ' + this.props.y + ' H ' + this.props.x + ' ' + this.props.y,
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

export default HLine;
