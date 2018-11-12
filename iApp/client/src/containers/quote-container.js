import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Quotes from '../components/quotes';

class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.handleGenQuote = this.handleGenQuote.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleGenQuote() {
    this.props.history.push('/salesDashboard');
  }
  handleSave() {
    this.props.history.push('/salesDashboard');
  }
  handleCancel() {
    this.props.history.push('/salesDashboard');
  }
  render() {
    return (
      <Quotes
        handleGenQuote={this.handleGenQuote}
        handleSave={this.handleSave}
        handleCancel={this.handleCancel}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    activeSales: state.activeSales,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuoteContainer),
);
