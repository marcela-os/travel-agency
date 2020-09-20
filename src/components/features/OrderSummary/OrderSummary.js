import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal.js';
import { formatPrice } from '../../../utils/formatPrice.js';


class OrderSummary extends React.Component {

  render(){
    const {tripCost, options} = this.props;
    const totalPrice = calculateTotal(formatPrice(tripCost), options);
    return (
      <h2 className={styles.component}> Total: <strong>${totalPrice}</strong></h2>
    );
  }
}

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
