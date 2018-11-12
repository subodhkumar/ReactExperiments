import React, { Component } from 'react';

class ProgressArc extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      graphData: [],
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
    let pathStringArr = [];
    let index = 0;
    let pathString;

    let yMax = this.props.data.reduce((max, d) => (max > d.y ? max : d.y), 0);
    let percArr = this.props.data.map(d => Math.ceil(d.y / yMax * 360));
    console.log('***', percArr);
    for (let d of percArr) {
      if (d === 360) {
        let radius = 20 - index;
        pathString = radius;
      } else {
        let x = 50;
        let y = 50;
        let radius = 20 - index;

        let startAngle = 0;
        // let endAngle = (d.y % 100) * 36;

        let endAngle = d;

        var start = this.polarToCartesian(x, y, radius, endAngle);
        var end = this.polarToCartesian(x, y, radius, startAngle);

        var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        pathString = [
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
      }

      pathStringArr.push(pathString);
      index = index + 1;

      /*graphData.push(
        <path
          className="bar"
          d={pathString}
          strokeWidth={strokeWidth}
          stroke="blue"
          strokeOpacity=".75"
          fill="none"
          strokeLinejoin="round"
        />,
      );*/
    }

    let graphData = pathStringArr.map(d => {
      if (d.toString().indexOf('M') === -1) {
        return (
          <circle
            class="spiral"
            cx="50"
            cy="50"
            r={d}
            stroke-width=".5"
            fill="none "
            stroke="blueviolet"
            stroke-opacity=".4"
            stroke-linecap="round "
          />
        );
      } else {
        return (
          <path
            class="spiral"
            d={d}
            fill="none"
            stroke="blueviolet "
            stroke-opacity=".5"
            stroke-width=".5"
            stroke-linecap="round "
          />
        );
      }
    });
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
          {this.state.graphData}
        </svg>
      </div>
    );
  }
}

export default ProgressArc;
