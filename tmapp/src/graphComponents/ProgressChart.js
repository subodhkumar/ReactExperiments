import React, { Component } from 'react';
import { ChartAxis, ChartLine, ChartPoint } from './ChartProps';

class BarChart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { path: 'M 10 5 H 10' };
  }
  calcPercentage() {
    if (this.props.data) {
      this.setState({
        path: 'M 10 5 H ' + (parseInt(this.props.data) + 10),
      });
      console.log('#', this.state);
    }
  }
  componentDidMount() {
    this.calcPercentage();
  }

  render() {
    return (
      <div className="svgDiv">
        <svg
          version="1.1"
          baseProfile="full"
          width="100%"
          viewBox="0 0 120 10"
          xmlns="http://www.w3.org/2000/svg "
        >
          <ChartAxis progress d={'M 10 5 H 110 '} />

          <ChartLine progress d={this.state.path} />
        </svg>
      </div>
    );
  }
}

export default BarChart;
