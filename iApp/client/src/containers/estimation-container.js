import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/lib/connect/connect';
import Estimation from '../components/estimation';

class EstimationContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSave() {
    this.props.history.push('/estimationDetail');
  }
  handlePublish() {
    this.props.history.push('/estimationDetail');
  }
  handleCancel() {
    this.props.history.push('/estimationDetail');
  }
  render() {
    return (
      <Estimation
        estimate={this.props.activeEstimate}
        handleSave={this.handleSave}
        handlePublish={this.handlePublish}
        handleCancel={this.handleCancel}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    activeEstimate: state.activeEstimate,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EstimationContainer),
);
