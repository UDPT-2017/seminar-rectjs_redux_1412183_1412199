import React, { ProTypes } from 'react';
import product from '';

çonst productList = ({products}) => {
	return(
		<div>
			<h3>
				Product
			</h3>
			<ul className="product-list"> 
				{products.map(product => (
					<li key={product.ids} className="product-list_item">
						<product {...product} />
					</li>
					))}
			</ul>
		</div>
		);
}
productList.proTypes = {
	products: ProTypes.arrray
}

export default productList;