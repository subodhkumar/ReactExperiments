import React, { Component } from 'react';

class BarChart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      graphData: null,
    };
  }

  getPathValue(index, x, y, dx, yMax) {
    let path = '';
    let px = index * dx;
    let py = y / yMax * 100;
    py = 110 - py;
    px = px + dx / 2 + 10;
    path = 'M ' + px + ' 110 L ' + px + ' ' + py;
    console.log(path);
    return path;
  }

  loadDataToGraph() {
    let barCount = this.props.data.length;
    let barGap = Math.floor(400 / barCount);
    let vMax = this.props.data.reduce((max, d) => (max > d.y ? max : d.y), 0);
    let graphData = this.props.data.map((d, index) => (
      <path
        className="bar"
        d={this.getPathValue(index, d.x, d.y, barGap, vMax)}
        strokeWidth={barGap * 0.75}
        stroke="blueviolet"
        strokeOpacity=".75"
        fill="none"
      />
    ));

    console.log('#count | ' + vMax);
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
          <path
            d="M 8 112 H 412 112"
            stroke="gray"
            strokeOpacity=".5"
            fill="none"
          />
          <path
            d="M 8 10 V 8 112"
            stroke="gray"
            strokeOpacity=".5"
            fill="none"
          />
          {this.state.graphData}
        </svg>
      </div>
    );
  }
}

export default BarChart;
