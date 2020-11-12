import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal.js';
import { formatPrice } from '../../../utils/formatPrice.js';
import { promoPrice } from '../../../utils/promoPrice.js';


class OrderSummary extends React.Component {

  render(){
    const {tripCost, options} = this.props;
    const totalPrice = calculateTotal(formatPrice(tripCost), options);
    return (
      <div className={styles.component}>
        <h2> Price from: <strong>${promoPrice(totalPrice)}</strong></h2>
        <h3> Standard price: <strong>${totalPrice}</strong></h3>
      </div>
    );
  }
}

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
