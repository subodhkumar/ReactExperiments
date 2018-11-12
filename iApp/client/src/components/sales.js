import React, { Component } from 'react';
import { Col, Col4, Col2, Col3, Col5 } from './library/grid';
import Button from './library/button';
import { Text, Date, Number } from './library/text';
import { RadioOption, CheckOption, H2, Section } from './library/form';
import moment from 'moment';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.sales;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSendForEstimation = this.handleSendForEstimation.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    console.log(
      JSON.stringify(this.state) + ' / ' + Object.keys(this.state).length,
    );

    if (Object.keys(this.state).length > 0) {
      this.props.onSave(this.state);
    } else {
      this.props.onSave();
    }
  }
  handleSendForEstimation() {
    // console.log(JSON.stringify(this.state));
    this.props.onSendForEstimation(this.state);
  }
  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    const type = target.type;

    console.log('***STATE | ', name, ' /', value, ' / ', target.type);
    this.setState({
      [name]: type === 'date' ? value : value,
    });

    // console.log('***STATE | ' + JSON.stringify(this.state));
  }
  render() {
    const bidTypeOptions = ['Structural', 'Miscellaneous', 'Engineering'];

    const actionBar =
      this.props.sales && this.props.sales.bid_number ? (
        <Col5>
          <Button
            value="Send for Estimation"
            onClick={this.handleSendForEstimation}
          />
          <Button value="Prepare Quote" onClick={this.props.onPrepareQuote} />
          <Button value="ReQuote" onClick={this.props.onReQuote} />
          <Button
            value="Close - Failed To Win"
            onClick={this.props.onCloseFail}
          />
          <Button value="Close - Won the Bid" onClick={this.props.onCloseWin} />
        </Col5>
      ) : (
        <Col3>
          <Button value="Publish" onClick={this.props.onPublish} />
          <Button value="Save" onClick={this.handleSave} />
          <Button value="Cancel" onClick={this.props.onCancel} />
        </Col3>
      );
    return (
      <div>
        <Section>
          <Col>
            <H2>Sales Form </H2>
          </Col>
        </Section>

        <Section>{actionBar}</Section>

        <Section>
          <Col2>
            <div>
              <h3>Bid Number </h3>
            </div>
            <div>
              <Number
                name="bid_number"
                onChange={this.handleInputChange}
                value={this.props.sales.bid_number}
                //label="Main Steel Hours"
              />
            </div>
          </Col2>
        </Section>
        <Section>
          <Col>
            <h3>Fabricator Info </h3>
          </Col>
          <Col3>
            <div>
              <Text
                name="fabricator"
                onChange={this.handleInputChange}
                label="Fabricator Name"
                value={this.props.sales.fabricator}
              />
            </div>
            <div>
              <Text
                name="fabricator_Url"
                onChange={this.handleInputChange}
                value={this.props.sales.fabricator_Url}
                label="URL"
              />
            </div>
            <div>
              <Text
                name="fabricator_phone"
                onChange={this.handleInputChange}
                value={this.props.sales.fabricator_phone}
                label="Phone"
              />
            </div>
          </Col3>
          <Col>
            <div>
              <Text
                name="fabricator_address"
                onChange={this.handleInputChange}
                value={this.props.sales.fabricator_address}
                label="Address"
              />
            </div>
          </Col>
        </Section>

        <Section>
          <Col>
            <h3>Bid Info </h3>
          </Col>
          <Col3>
            <div>
              <Date
                name="bid_received_date"
                onChange={this.handleInputChange}
                value={this.props.sales.bid_received_date}
                label="Received Date"
              />
            </div>
            <div>
              <Text
                name="bid_received_from"
                onChange={this.handleInputChange}
                value={this.props.sales.bid_received_from}
                label="Received From"
              />
            </div>
            <div>
              <Date
                name="bid_sent_date"
                onChange={this.handleInputChange}
                value={this.props.sales.bid_sent_date}
                label="Send Date"
              />
            </div>
            <div>
              <Text
                name="document_received"
                onChange={this.handleInputChange}
                value={this.props.sales.document_received}
                label="Document Received"
              />
            </div>
            <div>
              <Text
                name="document_path"
                onChange={this.handleInputChange}
                value={this.props.sales.document_path}
                label="Document Path"
              />
            </div>
            <div>
              <Text
                name="status"
                onChange={this.handleInputChange}
                value={this.props.sales.status}
                label="Bid Status"
              />
            </div>
            <div>
              <Text
                name="executive"
                onChange={this.handleInputChange}
                value={this.props.sales.executive}
                label="Executive"
              />
            </div>
          </Col3>
          <Col>
            <div>
              <RadioOption
                name="bidType"
                label="Bid Type"
                value={bidTypeOptions}
              />
            </div>
          </Col>
        </Section>

        <Col>
          <h3>Estimation Info </h3>
        </Col>
        <Col3>
          <div>
            <Text
              name="bid_type"
              onChange={this.handleInputChange}
              value={this.props.sales.bid_type}
              label="Bid Type"
            />
          </div>
          <div>
            <Number
              name="main_steel_hours"
              onChange={this.handleInputChange}
              value={this.props.sales.main_steel_hours}
              label="Main Steel Hours"
            />
          </div>
          <div>
            <Date
              name="main_steel_est_schedule"
              onChange={this.handleInputChange}
              value={this.props.sales.main_steel_est_schedule}
              label="Main Steel Estimated Schdule"
            />
          </div>
          <div>
            <Number
              name="misc_steel_hours"
              onChange={this.handleInputChange}
              value={this.props.sales.misc_steel_hours}
              label="Misc Steel Hours"
            />
          </div>
          <div>
            <Date
              name="main_steel_est_schedule"
              onChange={this.handleInputChange}
              value={this.props.sales.main_steel_est_schedule}
              label="Misc Steel Estimated Schdule"
            />
          </div>
        </Col3>
        <Col>
          <div>
            <CheckOption
              name="inclusion"
              label="Inclusions"
              value={bidTypeOptions}
            />
          </div>
        </Col>
        <Col>
          <div>
            <CheckOption
              name="exclusion"
              label="Exclusions"
              value={bidTypeOptions}
            />
          </div>
        </Col>
      </div>
    );
  }
}

export default Sales;
