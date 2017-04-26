import React, { PropTypes } from 'react';
import Product from '../../containers/Product';

const productList = ({ products }) => {
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
productList.propTypes = {
	products: PropTypes.arrray
}

export default productList;
