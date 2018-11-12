import styled, { keyframes } from 'styled-components';

const ChartAnimation = keyframes`
from {
    stroke-dashoffset: 2000;
  }

  to {
    stroke-dashoffset: 0;
  }
`;

const ChartLine = styled.path`
stroke-dasharray: 2000
  stroke-dashoffset: 0
stroke-width:${props => (props.progress ? '1.5' : '2.5')}
          stroke:blueviolet
          strokeOpacity:.5
          fill:none
          stroke-linecap:round
          stroke-linejoin:round
          animation:${ChartAnimation} ${props =>
  props.progress ? '6s' : '2s'} ease-in`;

const ChartAxis = styled.path`
stroke-width:${props => (props.progress ? '1' : '.05')}
          stroke:gray
          stroke-opacity:${props => (props.progress ? '.1' : '1')}
          fill:none
          stroke-linecap:round
          stroke-linejoin:round`;

const ChartPoint = styled.circle`
stroke-width:1
          stroke:gray
          strokeOpacity:.2
          fill:none
          stroke-linecap:round
          stroke-linejoin:round
          r:.15 `;

const ChartArc = styled.circle`
stroke-width:.5
            fill:none
            stroke:gray
            stroke-opacity:.1
            stroke-linecap:round `;

export { ChartLine, ChartAxis, ChartPoint, ChartArc };
