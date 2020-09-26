import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';

import {Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {
  render(){
    const {tripCost, options} = this.props;
    return (
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption  {...option} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
