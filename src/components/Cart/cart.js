import React, { PropTypes} from 'react';
import cartItem from './cartItem';

const cart = ({items, total, currency}) => {
	return(
		<div>
			<h3>Shopping Cart</h3>
			<div className="cart">
				<div className="panel panel-default">
					<div className="panel-body">
						{ items.length > 0 && (
							<ul>
								{items.map(item => (
									<li key={item.id}>
										<cartItem {...item} />
									</li>
									))}
							</ul>
							)}
						{items.length === 0 && (
							<div className="alert alert-info">Cart is empty</div>
						)}
						<div className="cart__total">Total: {total} {currency}</div>
					</div>
				</div>
			</div>
		</div>
		);
}

cart.proptypes = {
	items: PropTypes.array,
	total: PropTypes.number,
	currency: PropTypes.string
}
export default cart;
