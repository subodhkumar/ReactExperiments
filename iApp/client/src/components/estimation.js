import React, { Component } from 'react';
import { Col, Col4, Col2, Col3, Col5 } from './library/grid';
import Button from './library/button';
import { Text, Date, Number } from './library/text';
import { RadioOption, CheckOption, H2, Section } from './library/form';

class Estimation extends Component {
  render() {
    const bidTypeOptions = ['Structural', 'Miscellaneous', 'Engineering'];
    return (
      <div>
        <Section>
          <Col2>
            <div>
              <H2>Estimation Screen</H2>
            </div>
            <Col3>
              <Button onClick={this.props.handleSave} value="Save" />
              <Button onClick={this.props.handlePublish} value="Publish" />
              <Button onClick={this.props.handleCancel} value="Cancel" />
            </Col3>
          </Col2>
        </Section>
        <Col>
          <h3>Estimation Info </h3>
        </Col>

        <Section>
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

        <Section>
          <Col2>
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
          </Col2>
        </Section>
        <Section>
          <Col>
            <div>
              <Text label="Review / Comments" />
            </div>
          </Col>
        </Section>
      </div>
    );
  }
}

export default Estimation;
