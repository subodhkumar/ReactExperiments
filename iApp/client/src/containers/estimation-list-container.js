import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sales from '../components/sales';
import DataList from '../components/library/datalist';
import { fetchSales, selectEstimate } from '../actions';
import { withRouter } from 'react-router-dom';

class EstimationContainer extends Component {
  constructor(props) {
    super(props);
    this.showSelectedEstimation = this.showSelectedEstimation.bind(this);
  }
  componentDidMount() {
    this.props.fetchSales();
  }
  showSelectedEstimation(data) {
    this.props.selectEstimate(data);
    this.props.history.push('/estimationDetail');
  }
  createSalesList() {
    const objList = {
      columns: [
        'bid_number',
        'fabricator',
        'bid_received_date',
        'bid_due_date',
        'executive',
        'status',
      ],
      labels: [
        'Bid #',
        'Company',
        'Assign Date',
        'Completion Date',
        'Assigned To',
        'Status',
      ],
      types: ['string', 'string', 'date', 'date', 'string', 'string'],
      data: this.props.sales,
    };
    return (
      <DataList
        data={objList}
        key="bidNo"
        onRowClick={this.showSelectedEstimation}
      />
    );
  }
  render() {
    return <div>{this.createSalesList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    sales: state.sales,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSales, selectEstimate }, dispatch);
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EstimationContainer),
);
