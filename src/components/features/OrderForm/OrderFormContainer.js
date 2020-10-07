import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {
  getOrderOptions,
  setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = state => {
  console.log (getOrderOptions(state));
  return ({
    options: getOrderOptions(state),
  });
};

//funkcja mapStateToProps definiuje powiązanie propsów z stanem; przekazanie danych ze stanu aplikacji jako propsów komponentu

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);  //wyrażenie to jest odpowiedzialne za połączenie komponentu OrderForm z magazynem
