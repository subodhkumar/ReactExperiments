import React, { Component } from 'react';
import styled from 'styled-components';
import { Label } from './text';
import { Col } from './grid';
import { Link } from 'react-router-dom';

const blue = '#117cf7';
const blue_mute = '#74b4fa';
const blue_dark = '#043d80';
const gray = '#848689';
const gray_dark = '#2c343c';

const Container = styled.div`
  width: 90%;
  margin: auto;
  color: #2c343c;
  margin-bottom: 50px;
  // padding-left: 20%;
  padding-top: 100px;
  box-sizing: border-box;
  font-size: 12px;
`;

const Section = styled.div`
  padding: 15px 0px;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  margin: 0;
  color: ${props => (props.white ? '#fff%' : '#117cf7')};
  font-size: 36px;
`;
const H2 = styled.h2`
  margin: 0;
  color: ${props => (props.white ? '#fff%' : '#117cf7')};
  font-size: 28px;
`;
const H3 = styled.h3`
  margin: 0;
  color: ${props => (props.white ? '#fff%' : '#117cf7')};
  font-size: 28px;
`;
const H4 = styled.h4`
  margin: 0;
  color: ${props => (props.white ? '#fff%' : '#117cf7')};
  font-size: 18px;
`;
const H5 = styled.h5`
  margin: 0;
  color: ${props => (props.white ? '#fff%' : '#117cf7')};
`;

class Error extends Component {
  render() {
    const style = {
      color: 'red',
    };
    return <div style={style}> {this.props.message} </div>;
  }
}

const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  ${CheckboxContainer}:hover & {
    background-color: #ccc;
  }
  ${Checkbox}:checked & {
    background-color: #2196f3;
  }
`;

class CheckOption extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      fontSize: '14px',
    };
    if (!this.props.name) {
      return <Error message="property 'name' is missing in the RadioOption " />;
    } else if (!this.props.value || this.props.value.length === 0) {
      return <Error message="Value property is missing" />;
    } else {
      return (
        <Col>
          <div>
            <Label value={this.props.label} />
          </div>
          <div>
            {this.props.value.map((value, index) => {
              return (
                <span style={style} key={index}>
                  <input type="checkbox" name={this.props.name} value={value} />
                  {value}{' '}
                </span>
              );
            })}
          </div>
        </Col>
      );
    }
  }
}

class RadioOption extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      fontSize: '14px',
    };
    if (!this.props.name) {
      return <Error message="property 'name' is missing in the RadioOption " />;
    } else if (!this.props.value || this.props.value.length === 0) {
      return <Error message="Value property is missing" />;
    } else {
      return (
        <Col>
          <div>
            <Label value={this.props.label} />
          </div>
          <div style={style}>
            {this.props.value.map((value, index) => {
              return (
                <span key={index}>
                  <input type="radio" name={this.props.name} value={value} />
                  {value}{' '}
                </span>
              );
            })}
          </div>
        </Col>
      );
    }
  }
}

const FullHeightDiv = styled.div`
  background: #117cf7;
  width: ${props => (props.show ? '20%' : '0%')};
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  color: white;
  padding: 15px;
  padding-top: 80px;
  box-sizing: border-box;
  text-align: left;
`;

const FullWidthDiv = styled.div`
  color: #fff;
  background: white;
  //border-bottom: 1px solid #117cf7;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 10px 15px;
  box-sizing: border-box;
  background: #117cf7;
  height: ${props => (props.height ? props.height : '100px')};
`;

class SidebarOption extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
    };
    const divStyle = {
      padding: '5px 5px',
    };
    return (
      <div style={divStyle}>
        <Link style={linkStyle} to={this.props.to}>
          {this.props.label}
        </Link>
      </div>
    );
  }
}

class SidebarOptionList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.options.map((option, index) => (
          <SidebarOption key={index} to={option.to} label={option.label} />
        ))}
      </div>
    );
  }
}
class Sidebar extends Component {
  render() {
    return (
      <FullHeightDiv show>
        {' '}
        <SidebarOptionList options={this.props.options} />
      </FullHeightDiv>
    );
  }
}
class TopBar extends Component {
  render() {
    return (
      <FullWidthDiv height={this.props.height ? this.props.height : '80px'}>
        {this.props.children}
      </FullWidthDiv>
    );
  }
}
export {
  Container,
  RadioOption,
  CheckOption,
  Sidebar,
  H1,
  H2,
  H3,
  H4,
  H5,
  TopBar,
  Section,
};
