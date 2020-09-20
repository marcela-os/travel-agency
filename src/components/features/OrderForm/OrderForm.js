import React from 'react';
import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary.js';

import {Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {
  render(){
    return (
      <div className={styles.component}>
        <Row>
          <Col xs={12}>
            <OrderSummary/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderForm;
