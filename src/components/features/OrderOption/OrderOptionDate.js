import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({currentValue, setOptionValue}) => {
  return (
    <DatePicker
      selected={currentValue}
      onChange={setOptionValue}
      dateFormat="yyyy/MM/dd"
    />
  );
};


OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};
export default OrderOptionDate;
