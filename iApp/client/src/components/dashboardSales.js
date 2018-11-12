import React, { Component } from 'react';
import { Col, Col2 } from './library/grid';
import Button from './library/button';
import DataList from './library/datalist';
import { H2, Section } from './library/form';
import SalesContainer from '../containers/sales-list-container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSales } from '../actions/index';

class SalesDashboard extends Component {
  createNewSales() {
    this.props.addSales();
    this.props.history.push('/sales');
  }
  render() {
    return (
      <div>
        <Section>
          <Col2>
            <div>
              <H2>Sales Dashboard</H2>
            </div>

            <Col right>
              <div>
                <Button
                  value="New Lead"
                  onClick={this.createNewSales.bind(this)}
                />
              </div>
            </Col>
          </Col2>
        </Section>
        <Section>
          <Col>
            <SalesContainer />
          </Col>
        </Section>
      </div>
    );
  }
}

function mapStateToProps(props) {
  return {};
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addSales }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, matchDispatchToProps)(SalesDashboard),
);
