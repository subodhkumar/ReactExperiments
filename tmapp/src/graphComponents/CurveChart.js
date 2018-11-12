import React, { Component } from 'react';

class GPoint extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <circle
          id="myCircle"
          cx={this.props.x}
          cy={this.props.y}
          r=".5"
          strokeWidth="1"
          fill="none "
          stroke="gray "
          strokeOpacity=".5"
          strokeLinecap="round "
        />;
      </React.Fragment>
    );
  }
}

class CurveChart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      graphData: '',
    };
  }

  loadDataToGraph() {
    let barCount = this.props.data.length;
    let barGap = Math.floor(400 / barCount);
    let yMax = this.props.data.reduce((max, d) => (max > d.y ? max : d.y), 0);

    let py_old = 0;
    let px_old = 0;
    let pathString = '';
    let index = 0;

    let xOrigin = 5;
    let yOrigin = 115;

    let yAxis = [];
    let xAxis = [];

    for (let i = 0; i <= 11; i++) {
      yAxis.push(<GPoint x={xOrigin} y={yOrigin - i * 10} />);
    }

    for (let d of this.props.data) {
      let px = index * barGap + barGap / 2 + 10;
      let py = 115 - d.y / yMax * 100;

      yAxis.push(<GPoint x={px} y={yOrigin} />);

      if (pathString === '') {
        pathString +=
          'M ' +
          px +
          ' ' +
          py +
          ' C ' +
          px +
          ' ' +
          py +
          ' ' +
          px +
          ' ' +
          py +
          ' ' +
          px +
          ' ' +
          py;
      } else {
        //pathString+=' C '+(px_old+(px_old*(.25*(400/barCount))) +' '+py_old+' '+px+' '+py+' '+px+' '+py;
        pathString +=
          ' C ' +
          (px_old + 0.25 * (400 / barCount)) +
          ' ' +
          py_old +
          ' ' +
          (px - 0.25 * (400 / barCount)) +
          ' ' +
          py +
          ' ' +
          px +
          ' ' +
          py;
      }
      py_old = py;
      px_old = px;
      index++;
    }

    console.log('### CURVE DATA | ' + pathString);

    let graphData = (
      <React.Fragment>
        <path
          className="bar"
          d={pathString}
          strokeWidth="2"
          stroke="blueviolet"
          strokeOpacity=".75"
          fill="none"
          strokeLinecap="round "
          strokeLinejoin="round"
        />
      </React.Fragment>
    );

    this.setState({
      graphData: yAxis.concat(graphData),
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
            d="M 5 115 H 415 115"
            stroke="gray"
            strokeOpacity=".5"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M 5 0 V 5 115"
            stroke="gray"
            strokeOpacity=".5"
            fill="none"
            strokeLinecap="round"
          />
          {this.state.graphData}
        </svg>
      </div>
    );
  }
}

export default CurveChart;
