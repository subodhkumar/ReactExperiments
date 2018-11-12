import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Sales from '../components/sales';
import DataList from '../components/library/datalist';

import { selectSales, fetchSales } from '../actions';

class SalesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginData: this.props.loginData,
    };
  }
  showSelectedSales(data) {
    this.props.selectSales(data);
    this.props.history.push('/sales');
  }
  testFetchOperation() {
    this.props.fetchSales();
  }
  componentWillReceiveProps(nextProps) {
    console.log('**** SLIST | UPDATE');
  }
  componentDidMount() {
    this.props.fetchSales();
  }
  createSalesList() {
    /*
    [{"sales_id":1,"sales_number":1234,"fabricator":"Fab#1","project_name":"Proj#1",
    "bid_number":234,"bid_received_date":null,"bid_due_date":null,"bid_sent_date":null,"executive":"Subodh Kumar","status":null}]
    */
    const objList = {
      columns: [
        'bid_number',
        'bid_received_date',
        'bid_due_date',
        'bid_sent_date',
        'fabricator',
        'project_name',
        'executive',
        'status',
      ],
      labels: [
        'Bid #',
        'Received Date',
        'Due Date',
        'Sent date',
        'Fabricator',
        'Project',
        'Executive',
        'Status',
      ],
      types: [
        'number',
        'date',
        'date',
        'date',
        'string',
        'string',
        'string',
        'string',
      ],

      data: this.props.sales,
    };
    return (
      <div>
        <DataList
          data={objList}
          key="bid_number"
          onRowClick={this.showSelectedSales.bind(this)}
        />
      </div>
    );
  }
  renderView() {
    if (this.props.loginData && this.props.loginData.user_token) {
      return this.createSalesList();
    } else {
      this.props.history.replace('/login');
    }
  }
  render() {
    // return <div>{this.createSalesList()} {this.props.activeSales.bidNo}</div>;
    /*return (
      <div>
        <div>{this.createSalesList()} </div>
        <div>Current | {this.props.activeSales.bid_number}</div>
        <div>Test | {this.props.testFetch.express}</div>
      </div>
    );*/
    return (
      <div>
        <div>{this.renderView()} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sales: state.sales,
    activeSales: state.activeSales,
    loginData: state.loginData,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectSales, fetchSales }, dispatch);
}
export default withRouter(
  connect(mapStateToProps, matchDispatchToProps)(SalesContainer),
);
