import React, { Component } from 'react';

class TRow extends Component {
  render() {
    const rowStyle = {
      display: 'grid',
      gridGap: '5px',
      gridTemplateColumns: 'repeat( ' + this.props.col + ', 1fr)',
      borderBottom: this.props.header ? '1px solid #eee' : 'none',
      padding: '10px 0px',
      cursor: 'pointer',
    };
    return (
      <div onClick={this.props.onRowClick} style={rowStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default TRow;
