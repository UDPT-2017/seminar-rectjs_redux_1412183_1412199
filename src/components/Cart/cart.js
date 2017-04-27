// import React, { PropTypes} from 'react';
import React from 'react';
import CartItem from './cartItem';
import PropTypes from 'prop-types';
const Cart = ({ items, total, currency }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <ul>
                                {items.map(item => (
                                  <li key={item.id}>
                                    <CartItem {...item} />
                                  </li>
                                ))}
                            </ul>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <h4> <b> Total: {total} {currency} </b></h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
}

export default Cart;
