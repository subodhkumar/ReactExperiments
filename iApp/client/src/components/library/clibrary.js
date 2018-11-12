import React, {Component} from 'react';
import moment from 'moment';
import {Text,Number,Date} from './text';
import Card from './card';
import {Col,Col3} from './grid';
import DataList from './datalist';
import Button from './button';
import Navbar from './navbar';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { link } from 'fs';

const objList = {
    "columns":["index","assignee","company"],
    "labels":["#","Fabricator","Executive"],
    "data":[ {
        "index": 0,
        "assignee": "Jan Brennan",
        "company": "HELIXO"
      },
      {
        "index": 1,
        "assignee": "Estrada Floyd",
        "company": "HAWKSTER"
      },
      {
        "index": 2,
        "assignee": "Karin Knox",
        "company": "PATHWAYS"
      },
      {
        "index": 3,
        "assignee": "Delacruz Sykes",
        "company": "NORSUP"
      },
      {
        "index": 4,
        "assignee": "Stanton Schwartz",
        "company": "OBONES"
      },
      {
        "index": 5,
        "assignee": "Clements Bass",
        "company": "PLASTO"
      }]
}

const FullHeightDiv = styled.div`
    background: #117cf7;
    width: ${props => props.show?'20%':'0%'};
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color:white;
    padding: 15px;
    box-sizing: border-box;
    text-align:left;
`;

class SidebarOption extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const linkStyle = {
      textDecoration:'none',
      color:'white'
    }
    const divStyle = {
      padding: '5px 5px'
    }
    return (
      <div style={divStyle}><Link style={linkStyle} to={this.props.to}>{this.props.label}</Link></div>
    )
  }
}
const optionList = [
  {to:'/',label:'Home'},
  {to:'/main',label:'Main'},
  {to:'/callback',label:'Callback'},
  {to:'/library',label:'Library'},
  {to:'/login',label:'Login'},
  {to:'/estimationDashboard',label:'Estimation Dashboard'},
  {to:'/salesDashboard',label:'Sales Dashboard'},
  {to:'/estimation',label:'Estimation'},
  {to:'/estimationDetail',label:'Estimation Detail'},
  {to:'/sales',label:'Sales'},
  {to:'/quote',label:'Quote'},
];
class SidebarOptionList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div>
          {this.props.options.map(option=>(
            <SidebarOption to={option.to} label={option.label}/>
          ))}
        </div>
    );
  }
}
class Sidebar extends Component {
  render(){
    return (
      <FullHeightDiv show> <SidebarOptionList options={this.props.options} /></FullHeightDiv>
    )
  }
}
const navOptions = ['Sales','Estimates','Quotes'];
const date = moment().format("YYYY-MM-DD");
class CList extends Component {
    render(){
        return (
          <div>
            <Sidebar options={optionList} />
            <Col>
            <Navbar options={navOptions} /> 
            </Col>
            <Col3>
            <Card>
            <div><Text value="from Library" label="test label" /></div>
            <div><Number value="12" label="test label" /></div>
            <div><Date value={date} label="test label" /></div>
            </Card>
            <Card>
            <Button />
                <DataList data={objList} />
            </Card>
            <Card>
                
            </Card>
            </Col3>
          </div>
        )
    }
}

export default CList;