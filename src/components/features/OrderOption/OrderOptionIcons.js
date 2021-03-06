import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice.js';
import Icon from '../../common/Icon/Icon.js';
import PropTypes from 'prop-types';

//nie jestem pewna czy wszystko jest ok z propsami bo wywala ostrzeżenia

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div onClick={() => setOptionValue()}>
        <Icon name='times-circle'/>
				none
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon + ((currentValue === value.id) ? ' ' + styles.iconActive : '')}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name='times-circle' /> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);


OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue:PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
