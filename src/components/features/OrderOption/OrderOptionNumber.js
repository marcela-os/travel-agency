import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice.js';


class OrderOptionNumber extends React.Component {
  render(){
    const {currentValue, limits, price, setOptionValue} = this.props;
    return (
      <div className={styles.number}>
        <input className={styles.inputSmall} type='number' value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)} />
				({formatPrice(price)})
      </div>
    );
  }
}

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  limits: PropTypes.string,
  price: PropTypes.string,

};

export default OrderOptionNumber;
