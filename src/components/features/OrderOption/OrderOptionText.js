import React from 'react';
import styles from './OrderOption.scss';


class OrderOptionText extends React.Component {
  render(){
    return (
      <div className={styles.number}>
        <input className={styles.inputSmall} type='text' />
      </div>
    );
  }
}



export default OrderOptionText;
