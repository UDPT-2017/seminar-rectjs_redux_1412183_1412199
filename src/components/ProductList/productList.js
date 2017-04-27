// import React, { PropTypes } from 'react';
import React from 'react';
import Product from '../../containers/Product';
import PropTypes from 'prop-types';
const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Products</h2>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
