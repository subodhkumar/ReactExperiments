import React, { Component } from 'react';
import { Col, Col4, Col2, Col3, Col5 } from './library/grid';
import Button from './library/button';
import { Text, Date, Number } from './library/text';
import { RadioOption, CheckOption, H2, Section } from './library/form';

class EstimationDetail extends Component {
  constructor(props) {
    super(props);

    this.handleEstimate = this.handleEstimate.bind(this);
  }
  handleEstimate() {}
  handleCancel() {}
  render() {
    const bidTypeOptions = ['Structural', 'Miscellaneous', 'Engineering'];
    return (
      <div>
        <Section>
          <Col2>
            <div>
              <H2>Estimation Detail Screen</H2>
            </div>
            <Col2>
              <Button onClick={this.props.onEstimate} value="Estimate" />
              <Button onClick={this.props.onCancel} value="Cancel" />
            </Col2>
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
                value={this.props.estimate.fabricator}
              />
            </div>
            <div>
              <Text
                name="fabricator_Url"
                onChange={this.handleInputChange}
                value={this.props.estimate.fabricator_Url}
                label="URL"
              />
            </div>
            <div>
              <Text
                name="fabricator_phone"
                onChange={this.handleInputChange}
                value={this.props.estimate.fabricator_phone}
                label="Phone"
              />
            </div>
          </Col3>
          <Col>
            <div>
              <Text
                name="fabricator_address"
                onChange={this.handleInputChange}
                value={this.props.estimate.fabricator_address}
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
                value={this.props.estimate.bid_received_date}
                label="Received Date"
              />
            </div>
            <div>
              <Text
                name="bid_received_from"
                onChange={this.handleInputChange}
                value={this.props.estimate.bid_received_from}
                label="Received From"
              />
            </div>
            <div>
              <Date
                name="bid_sent_date"
                onChange={this.handleInputChange}
                value={this.props.estimate.bid_sent_date}
                label="Send Date"
              />
            </div>
            <div>
              <Text
                name="document_received"
                onChange={this.handleInputChange}
                value={this.props.estimate.document_received}
                label="Document Received"
              />
            </div>
            <div>
              <Text
                name="document_path"
                onChange={this.handleInputChange}
                value={this.props.estimate.document_path}
                label="Document Path"
              />
            </div>
            <div>
              <Text
                name="status"
                onChange={this.handleInputChange}
                value={this.props.estimate.status}
                label="Bid Status"
              />
            </div>
            <div>
              <Text
                name="executive"
                onChange={this.handleInputChange}
                value={this.props.estimate.executive}
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

        <Section>
          <Col>
            <h3>Estimation Info </h3>
          </Col>
          <Col3>
            <div>
              <Text
                name="bid_type"
                onChange={this.handleInputChange}
                value={this.props.estimate.bid_type}
                label="Bid Type"
              />
            </div>
            <div>
              <Number
                name="main_steel_hours"
                onChange={this.handleInputChange}
                value={this.props.estimate.main_steel_hours}
                label="Main Steel Hours"
              />
            </div>
            <div>
              <Date
                name="main_steel_est_schedule"
                onChange={this.handleInputChange}
                value={this.props.estimate.main_steel_est_schedule}
                label="Main Steel Estimated Schdule"
              />
            </div>
            <div>
              <Number
                name="misc_steel_hours"
                onChange={this.handleInputChange}
                value={this.props.estimate.misc_steel_hours}
                label="Misc Steel Hours"
              />
            </div>
            <div>
              <Date
                name="main_steel_est_schedule"
                onChange={this.handleInputChange}
                value={this.props.estimate.main_steel_est_schedule}
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
        </Section>
      </div>
    );
  }
}

export default EstimationDetail;
