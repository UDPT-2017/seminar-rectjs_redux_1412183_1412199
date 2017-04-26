import React, { Component, PropTypes} from 'react';

class Product extends Component {
	handleClick = () => {
		const {id, addToCart, removeFromCart, isInCart} = this.props;
		if(isInCart)
		{
			removeFromCart(id);
		}
		else
		{
			addToCart(id);
		}
	}
	render() {
		const {name, made, price, currency, image, isInCart} = this.props;
		return(

			<div className="product thumbnail">
			<img src={image} alt ="not found" />
			<div className="caption">
			<h3>{name}</h3>
			<div className="made">Made in {made} </div>
			<div className="product_price">{price} {currency}
			</div>
			<div className="product_button-wrap">
			<button className={isInCart ? 'btn btn-danger' : 'btn btn-primary'} onClick={this.handleClick}>
			{isInCart ? 'Remove' : 'add to Cart'}
			</button>
			</div>
			</div>
			</div>
		);
	}
}
Product.proptypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number,
	currency: PropTypes.string,
	image: PropTypes.string,
	isInCart: PropTypes.bool.isRequired,
	addToCart: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired
}
export default Product;
