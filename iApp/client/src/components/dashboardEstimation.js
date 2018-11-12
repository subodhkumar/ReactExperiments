import React, { Component } from 'react';

import { Col, Col2 } from './library/grid';
import Button from './library/button';
import DataList from './library/datalist';
import { H2, Section } from './library/form';
import EstimationContainer from '../containers/estimation-list-container';

class EstDashboard extends Component {
  render() {
    return (
      <div>
        <Section>
          <Col>
            <H2>Estimation Dashboard</H2>
          </Col>
        </Section>
        <Section>
          <Col>
            <EstimationContainer />
          </Col>
        </Section>
      </div>
    );
  }
}

export default EstDashboard;
