import React, { Component } from 'react';
import { Col, Col3, Col2 } from './library/grid';
import Button from './library/button';
import { CheckOption, H2, Section } from './library/form';
import { Text, Date, Number } from './library/text';

class Quotes extends Component {
  render() {
    const bidTypeOptions = ['Structural', 'Miscellaneous', 'Engineering'];
    return (
      <div>
        <Section>
          <Col2>
            <div>
              <H2>Quote</H2>
            </div>

            <Col3>
              <Button
                onClick={this.props.handleGenQuote}
                value="Generate Quote"
              />
              <Button onClick={this.props.handleSave} value="Save" />
              <Button onClick={this.props.handleCancel} value="Cancel" />
            </Col3>
          </Col2>
        </Section>

        <Section>
          <Col2>
            <div>
              <CheckOption
                name="inclusion"
                label="Inclusions"
                value={bidTypeOptions}
              />
            </div>
            <div>
              <CheckOption
                name="exclusion"
                label="Exclusions"
                value={bidTypeOptions}
              />
            </div>
          </Col2>
        </Section>

        <Section>
          <Col2>
            <div>
              <Number label="Main Steel Hours" />
            </div>
            <div>
              <Date label="Main Steel Estimated Schdule" />
            </div>
            <div>
              <Number label="Misc Steel Hours" />
            </div>
            <div>
              <Date label="Misc Steel Estimated Schdule" />
            </div>
            <div>
              <Number label="Quote Price" />
            </div>
            <div>
              <Number label="Engineering Price" />
            </div>
          </Col2>
        </Section>
        <Section>
          <Col>
            <div>
              <Text label="Remarks/Comments" />
            </div>
          </Col>
        </Section>
      </div>
    );
  }
}

export default Quotes;
