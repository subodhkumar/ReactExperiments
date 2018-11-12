import React, { Component } from 'react';

class TCol extends Component {
  render() {
    const style = {
      textAlign: this.props.left
        ? 'left'
        : this.props.right
          ? 'right'
          : this.props.center
            ? 'center'
            : 'left',
      wordBreak: 'break-word',
    };
    return this.props.header ? (
      <div style={style}>
        <strong>{this.props.children}</strong>
      </div>
    ) : (
      <div style={style}>{this.props.children}</div>
    );
  }
}

export default TCol;
