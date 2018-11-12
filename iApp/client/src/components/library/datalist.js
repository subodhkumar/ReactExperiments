import React, { Component } from 'react';
import TRow from './trow';
import TCol from './tcol';
import moment from 'moment';

class DataList extends Component {
  constructor(props) {
    super(props);
    console.log('DL # |' + props.data.columns.length);
  }

  handleClick(data) {
    this.props.onRowClick(data);
  }
  render() {
    //const key = (this.props.key)?(this.props.key):'index';
    if (this.props.data.columns && this.props.data.labels && this.props.data) {
      if (this.props.data.columns.length === this.props.data.labels.length) {
        return (
          <div>
            <TRow header col={this.props.data.labels.length}>
              {this.props.data.labels.map(column => (
                <TCol header>{column} </TCol>
              ))}
            </TRow>

            {this.props.data.data.map((data, index) => {
              return (
                <TRow
                  key={index}
                  onRowClick={this.handleClick.bind(this, data)}
                  col={this.props.data.labels.length}>
                  {this.props.data.columns.map((column, index) => {
                    if (this.props.data.types[index] === 'date') {
                      if (data[column]) {
                        return (
                          <TCol>
                            {moment(data[column]).format('DD.MM.YYYY')}
                          </TCol>
                        );
                      } else {
                        return <TCol />;
                      }
                    } else {
                      return <TCol>{data[column]}</TCol>;
                    }
                  })}
                </TRow>
              );
            })}
          </div>
        );
      } else {
        return <div> Incorrect Column & Label Mapping</div>;
      }
    } else {
      return <div> Please ensure the data format passed</div>;
    }
  }
}

export default DataList;
