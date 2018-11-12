import React, { Component } from 'react';

import ProgressChart from './graphComponents/ProgressChart';
import BarChart from './graphComponents/BarChart';
import LineChart from './graphComponents/LineChart';
import CurveChart from './graphComponents/CurveChart';
import ProgressArc from './graphComponents/ProgressArc';
import ProgressArcSet from './graphComponents/ProgressArcSet';
import PieArc from './graphComponents/PieArc';
import PieChart from './graphComponents/PieChart';
import CurveChartSine from './graphComponents/CurveChartSine';

const progressChartData = 75;
const r = 20;
const chartData = [
  { x: 'a', y: 5 },
  { x: 'a', y: 45 },
  { x: 'a', y: 20 },
  { x: 'a', y: 95 },
  { x: 'a', y: 40 },
  { x: 'a', y: 55 },
  { x: 'a', y: 50 },
  { x: 'a', y: 85 },
  { x: 'a', y: 60 },
  { x: 'a', y: 95 },
  { x: 'a', y: 80 },
  { x: 'a', y: 125 },
  { x: 'a', y: 100 },
  { x: 'a', y: 150 },
];

class ChartApp extends Component {
  render() {
    return (
      <div className="App">
        <CurveChartSine data={chartData} />
        <LineChart data={chartData} />
        <ProgressChart data={progressChartData} />
        <ProgressArc data={progressChartData} />
      </div>
    );
  }
}

export default ChartApp;
