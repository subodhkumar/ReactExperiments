import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #117cf7;
  outline: none;
  margin-bottom: 20px;
  height: 30px;
  color: #2c343c;
`;

const style = {
  textAlign: 'left',
};

class Label extends Component {
  render() {
    const style = {
      fontSize: '11px',
      color: '#117cf7',
    };
    return <span style={style}>{this.props.value}</span>;
  }
}

class Text extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.name = this.props.name ? this.props.name : '';
    this.value = this.props.value ? this.props.value : '';
    this.state = {
      value: this.value,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleBlur(event) {
    this.props.onChange(event);
  }
  render() {
    return (
      <div style={style}>
        <div>
          <Label value={this.props.label} />
        </div>
        <div>
          <Input
            name={this.name}
            onBlur={this.handleBlur}
            onChange={this.handleInputChange}
            type="text"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}
class Email extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.name = this.props.name ? this.props.name : '';
    this.value = this.props.value ? this.props.value : '';
    this.state = {
      value: this.value,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleBlur(event) {
    this.props.onChange(event);
  }
  render() {
    return (
      <div style={style}>
        <div>
          <Label value={this.props.label} />
        </div>
        <div>
          <Input
            name={this.name}
            onBlur={this.handleBlur}
            onChange={this.handleInputChange}
            type="email"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

class Number extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.name = this.props.name ? this.props.name : '';
    this.value = this.props.value ? this.props.value : '';
    this.state = {
      value: this.value,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleBlur(event) {
    this.props.onChange(event);
  }

  render() {
    return (
      <div style={style}>
        <div>
          <Label value={this.props.label} />
        </div>
        <div>
          <Input
            name={this.name}
            onBlur={this.handleBlur}
            onChange={this.handleInputChange}
            onInput={this.handleInputChange}
            type="number"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

class Date extends Component {
  constructor(props) {
    super(props);
    //console.log(props);

    this.state = {
      value: '',
    };

    this.getDateValue = this.getDateValue.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getDateValue(dvalue) {
    if (dvalue !== '') {
      let dateObj = moment(dvalue);

      let month = dateObj.get('month');
      month++;

      let pDate = dateObj.get('date');
      let dateValue =
        dateObj.get('year') +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (pDate < 10 ? '0' + pDate : pDate);

      console.log('DATE | ' + dateValue);
      return dateValue;
    } else {
      return '';
    }
  }
  componentDidMount() {
    let name = this.props.name ? this.props.name : '';
    let dvalue = this.props.value ? this.props.value : '';
    let fVal = this.getDateValue(dvalue);
    this.setState({
      value: fVal,
    });
  }
  handleInputChange(event) {
    /*this.setState({
      value: event.target.value,
    });*/
    console.log('Val B |', event.target.value);
    let fVal = this.getDateValue(event.target.value);
    this.setState({
      value: fVal,
    });
    event.target.value = fVal;
    console.log('Val A |', event.target.value, ' | ', fVal);
    this.props.onChange(event);
  }
  render() {
    return (
      <div style={style}>
        <div>
          <Label value={this.props.label} />
        </div>
        <div>
          <Input
            name={this.props.name}
            //onBlur={this.props.onChange}
            onChange={this.handleInputChange}
            type="date"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

class Password extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.name = this.props.name ? this.props.name : '';
    this.value = this.props.value ? this.props.value : '';
    this.state = {
      value: this.value,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleBlur(event) {
    this.props.onChange(event);
  }
  render() {
    return (
      <div style={style}>
        <div>
          <Label value={this.props.label} />
        </div>
        <div>
          <Input
            name={this.name}
            onBlur={this.handleBlur}
            onChange={this.handleInputChange}
            type="password"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export { Text, Number, Date, Password, Label, Email };
