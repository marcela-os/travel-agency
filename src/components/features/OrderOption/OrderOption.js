import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionDropdown from './OrderOptionDropdown.js';
import OrderOptionIcons from './OrderOptionIcons.js';
import OrderOptionCheckboxes from './OrderOptionCheckboxes.js';
import OrderOptionNumber from './OrderOptionNumber.js';


const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};


const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];						// Wartością stałej OptionComponent będzie jeden z komponentów z obiektu optionTypes.
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}						//Wykorzystujemy go w kodzie JSX i przekazujemy mu wszystkie propsy otrzymane przez OrderOption, poza name i type.
          setOptionValue={value => setOrderOption({[id]: value})}  		//funkcja strzałkowa, która wywołuje funkcję setOrderOption, przekazując jej obiekt. W tym obiekcie jest jedna właściwość, której kluczem będzie zawartość zmiennej (a w tym wypadku – propsa) id, a wartością – argument funkcji strzałkowej.
        />
      </div>
    );
  }
};


export default OrderOption;
