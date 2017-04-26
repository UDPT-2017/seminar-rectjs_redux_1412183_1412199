import {connect} from 'react-redux';
import ProductList from '../compoments/ProductList';
import {getProducts} from '../reducers/products';

const mapStateToProps = (state, props) => {
  return {
    products: getProducts(state, props)
  }
}

export default connect(mapStateToProps)(ProductList);
