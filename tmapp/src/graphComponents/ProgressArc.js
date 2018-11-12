import React, { Component } from 'react';
import { ChartArc } from './ChartProps';

class ProgressArc extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      graphData: '',
    };
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  loadDataToGraph() {
    let x = 50;
    let y = 50;
    let radius = this.props.radius || 20;
    let strokeWidth = 5;
    let startAngle = 0;
    let endAngle = (this.props.data % 100) * 3.6;
    var start = this.polarToCartesian(x, y, radius, endAngle);
    var end = this.polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    this.props.multi ? (strokeWidth = 1) : (strokeWidth = 1);

    var pathString = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(' ');

    console.log(pathString);

    let graphData = (
      <path
        className="spiral"
        d={pathString}
        strokeWidth={strokeWidth}
        strokeOpacity=".75"
        stroke="blueviolet"
        fill="none"
        strokeLinecap="round"
      />
    );

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
          version="1.1 "
          baseProfile="full "
          width="100% "
          viewBox="20 20 60 60"
          xmlns="http://www.w3.org/2000/svg "
        >
          <ChartArc cx="50" cy="50" r="20" />

          <text x="50" y="55" text-anchor="middle">
            {this.props.data}
          </text>
          {this.state.graphData}
        </svg>
      </div>
    );
  }
}

export default ProgressArc;
