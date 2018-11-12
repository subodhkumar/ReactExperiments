import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
Description, Status, OnClick
*/
class Task extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div onClick={this.props.onClick}>
        Name: {this.props.task.description} | {this.props.task.status}{' '}
      </div>
    );
  }
}

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Task;
