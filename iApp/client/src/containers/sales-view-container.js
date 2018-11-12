import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Sales from '../components/sales';
import { connect } from 'react-redux';
import {
  publishSales,
  saveSales,
  cancelSales,
  updateSales,
  insertSales,
} from '../actions/index';

class SalesView extends Component {
  constructor(props) {
    super(props);
    this.handleSendForEstimation = this.handleSendForEstimation.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('****SALESDB | UPDATE');
  }
  handlePublish() {
    this.props.history.push('/salesDashboard');
  }
  handleSave(salesData) {
    console.log('DATA FOR SAVE | ' + JSON.stringify(salesData));
    if (salesData) {
      this.props.insertSales(salesData);
    }
    this.props.history.push('/salesDashboard');
  }
  handleCancel() {
    this.props.history.push('/salesDashboard');
  }

  handleSendForEstimation(salesData) {
    console.log('DATA FOR EST | ' + JSON.stringify(salesData));
    this.props.updateSales(salesData);
    this.props.history.push('/salesDashboard');
  }

  handlePrepareQuote() {
    this.props.history.push('/quote');
  }
  handleReQuote() {
    this.props.history.push('/quote');
  }
  handleCloseFail() {
    this.props.history.push('/salesDashboard');
  }
  handleCloseWin() {
    this.props.history.push('/salesDashboard');
  }
  render() {
    if (this.props.activeSales && this.props.activeSales.bid_number) {
      return (
        <div>
          <Sales
            sales={this.props.activeSales}
            onSendForEstimation={this.handleSendForEstimation}
            onPrepareQuote={this.handlePrepareQuote.bind(this)}
            onReQuote={this.handleReQuote.bind(this)}
            onCloseFail={this.handleCloseFail.bind(this)}
            onCloseWin={this.handleCloseWin.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Sales
            sales={this.props.activeSales}
            onPublish={this.handlePublish.bind(this)}
            onSave={this.handleSave}
            onCancel={this.handleCancel.bind(this)}
          />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    activeSales: state.activeSales,
    loginData: state.loginData,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { publishSales, saveSales, cancelSales, updateSales, insertSales },
    dispatch,
  );
}

export default withRouter(
  connect(mapStateToProps, matchDispatchToProps)(SalesView),
);
