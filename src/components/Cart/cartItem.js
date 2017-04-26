import React, { PropTypes } from 'react';

const cartItem =({name, price, currency}) => {
	return (

		<div className="cart-item">
			<span className="cart-item_name">{name}</span>
			<span className="cart-item__price">{price} {currency}</span>
		</div>
		);
}

cartItem.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired
}

export default cartItem;