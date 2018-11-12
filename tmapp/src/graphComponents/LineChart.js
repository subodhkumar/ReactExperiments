import React, { Component } from 'react';
import { ChartAxis, ChartLine, ChartPoint } from './ChartProps';

class LineChart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      graphData: null,
    };
  }

  loadDataToGraph() {
    let barCount = this.props.data.length;
    let barGap = Math.floor(400 / barCount);
    let yMax = this.props.data.reduce((max, d) => (max > d.y ? max : d.y), 0);

    let pathString = this.props.data.reduce((start, d, index) => {
      if (index === 0) {
        return (
          start +
          ' ' +
          parseInt(index * barGap + barGap / 2 + 10) +
          ' ' +
          parseInt(115 - d.y / yMax * 100)
        );
      } else {
        return (
          start +
          ' L ' +
          parseInt(index * barGap + barGap / 2 + 10) +
          ' ' +
          parseInt(110 - d.y / yMax * 100)
        );
      }
    }, 'M ');

    let graphData = <ChartLine d={pathString} />;

    this.setState({
      graphData: graphData,
    });
  }
  componentDidMount() {
    this.loadDataToGraph();
  }
  render() {
    return (
      <div className="svgDiv">
        <svg
          version="1.1"
          baseProfile="full"
          width="100%"
          viewBox="0 0 420 120"
          xmlns="http://www.w3.org/2000/svg "
        >
          <ChartAxis d="M 5 0 V 5 115" />
          <ChartAxis d="M 5 115 H 415 115" />
          {this.state.graphData}
        </svg>
      </div>
    );
  }
}

export default LineChart;
