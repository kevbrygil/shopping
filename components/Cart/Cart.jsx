import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import Router from 'next/router'

const Cart = ({ items, total, currency, removeFromCart }) => {
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map((item) => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && <div className="alert alert-info">Cart is empty</div>}
                        <div className="cart__total">
                            Sub Total: {total} {currency} <br />
                            Sub Total: {total + total * 0.16} {currency}
                        </div>
                        {items.length > 0 && (
                            <p>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        Router.replace('/portal/pay')
                                    }}>
                                    Comprar <span className="badge">{items.length}</span>
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired,
}

export default Cart
