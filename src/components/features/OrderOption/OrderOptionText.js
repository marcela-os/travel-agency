import React from 'react';
import PropTypes from 'prop-types';

class OrderOptionText extends React.Component {
  render(){
    const {currentValue, setOptionValue} = this.props;
    return (
      <div>
        <input type='text' value={currentValue} onChange={event => setOptionValue(event.currentTarget.value)}/>
      </div>
    );
  }
}

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
