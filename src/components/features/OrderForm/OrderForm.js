import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
import { formatPrice } from '../../../utils/formatPrice.js';
import { calculateTotal } from '../../../utils/calculateTotal.js';
import settings from '../../../data/settings.js';
import Button from '../../common/Button/Button.js';

import {Row, Col} from 'react-flexbox-grid';

const sendOrder = (options, tripCost, tripId, tripName, regionCode, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  console.log('countryCode', countryCode);

  if (options.name === '' || options.name.length < 3) {
    alert('Please write at least 3 letters');
    return;
  }
  if (options.contact === '' || options.contact.length < 9) {
    alert('Please write at least 9 letters');
    return;
  }

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    regionCode: regionCode,
    countryCode: countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {
  render(){
    console.log(this.props);
    const {tripCost, options, setOrderOption, tripId, tripName, regionCode, countryCode} = this.props;
    return (
      <Row className={styles.component}>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption  {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
        <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, regionCode, countryCode)}>Order now!</Button>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  regionCode: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
