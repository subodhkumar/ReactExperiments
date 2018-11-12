import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class Tasklist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.tasks) {
      const listElements = this.props.tasks.map((task, index) => (
        <Task key={index} task={task} onClick={this.props.onTaskClick} />
      ));
      return <div> {listElements} </div>;
    } else {
      return <div>No Tasks Found!</div>;
    }
  }
}

Tasklist.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
};
export default Tasklist;
