import React, { Component } from 'react';
import EstimationDetail from '../components/estimationDetail';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class EstimationDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.handleEstimate = this.handleEstimate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleEstimate() {
    this.props.history.push('/estimation');
  }
  handleCancel() {
    this.props.history.push('/estimationDashboard');
  }
  render() {
    return (
      <EstimationDetail
        onEstimate={this.handleEstimate}
        onCancel={this.handleCancel}
        estimate={this.props.activeEstimate}
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
  connect(mapStateToProps, mapDispatchToProps)(EstimationDetailContainer),
);
