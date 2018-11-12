import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  padding: 5px;
  grid-gap: 15px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  text-align: ${props =>
    props.center ? 'center' : props.right ? 'right' : 'left'};
  align-items: ${props =>
    props.top ? 'top' : props.bottom ? 'bottom' : 'center'};
`;

const Col = Grid.extend``;

const Col2 = Grid.extend`
  grid-template-columns: repeat(2, 1fr);
`;

const Col3 = Grid.extend`
  grid-template-columns: repeat(3, 1fr);
`;

const Col4 = Grid.extend`
  grid-template-columns: repeat(4, 1fr);
`;

const Col5 = Grid.extend`
  grid-template-columns: repeat(5, 1fr);
`;

const Col6 = Grid.extend`
  grid-template-columns: repeat(6, 1fr);
`;

const Col7 = Grid.extend`
  grid-template-columns: repeat(7, 1fr);
`;

const Col8 = Grid.extend`
  grid-template-columns: repeat(8, 1fr);
`;

const Col9 = Grid.extend`
  grid-template-columns: repeat(9, 1fr);
`;

const Col10 = Grid.extend`
  grid-template-columns: repeat(10, 1fr);
`;

const Col11 = Grid.extend`
  grid-template-columns: repeat(11, 1fr);
`;

const Col12 = Grid.extend`
  grid-template-columns: repeat(12, 1fr);
`;

export {
  Col,
  Col2,
  Col3,
  Col4,
  Col5,
  Col6,
  Col7,
  Col8,
  Col9,
  Col10,
  Col11,
  Col12,
};
