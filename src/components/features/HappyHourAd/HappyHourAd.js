import React from 'react';
import styles from './HappyHourAd.scss';
import { formatTime } from '../../../utils/formatTime.js';

class HappyHourAd extends React.Component {
  constructor(){
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => this.forceUpdate(), 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render(){
    let newCountdownTime = this.getCountdownTime();
    if(newCountdownTime > 82800){
      newCountdownTime = 'Lorem ipsum dolor sit amet';
    } else {
      newCountdownTime = formatTime();
    }

    return (
      <div>
        <div className={styles.component}>
          <h3 className={styles.title}>Happy Hour!</h3>
          <div className={styles.promoDescription}>{newCountdownTime}</div>
        </div>
      </div>
    );
  }
}

export default HappyHourAd;
