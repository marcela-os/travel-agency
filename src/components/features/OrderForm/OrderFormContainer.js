import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});																	//funkcja mapStateToProps definiuje powiązanie propsów z stanem; przekazanie danych ze stanu aplikacji jako propsów komponentu 

export default connect(mapStateToProps)(OrderForm);  //wyrażenie to jest odpowiedzialne za połączenie komponentu OrderForm z magazynem
