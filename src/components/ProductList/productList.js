// import React, { PropTypes } from 'react';
import React from 'react';
import Product from '../../containers/Product';
import PropTypes from 'prop-types';
const ProductList = ({ products }) => {
	return(
		<div>
			<h3>
				Products
			</h3>
			<ul className="product-list">
				{products.map(product => (
					<li key={product.ids} className="product-list_item">
						<Product {...product} />
					</li>
					))}
			</ul>
		</div>
		);
}
ProductList.propTypes = {
	products: PropTypes.arrray
}

export default ProductList;
