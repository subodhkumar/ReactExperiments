import React, { Component } from 'react';

class Button extends Component {
  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    const value = this.props.value ? this.props.value : 'Click Me!';
    const style = {
      padding: '10px 15px',
      background: '#117cf7',
      color: 'white',
      fontSize: '12px',
      border: 'none',
      borderRadius: '2px',
      margin: '0px 5px',
    };
    return (
      <React.Fragment>
        <button style={style} onClick={this.onClick.bind(this)}>
          {value}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
