import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import Link from 'next/link'
import Router from 'next/router'

const Cart = ({ items, total, currency, removeFromCart }) => {
    const removeall = () => {
        if (items.length > 0) {
            items.map((item) => removeFromCart(item.id))
        }
    }
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
                            Total: {(total + total * 0.16).toFixed(2)} {currency}
                        </div>
                        {items.length > 0 && Router?.pathname !== '/portal/pay' && (
                            <p>
                                <Link href="/portal/pay">
                                    <a className="btn btn-primary">
                                        Comprar <span className="badge">{items.length}</span>
                                    </a>
                                </Link>
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {items.length > 0 && Router?.pathname === '/portal/pay' && (
                <p>
                    <a
                        className="btn btn-primary"
                        onClick={() => {
                            removeall()
                            Router.replace('/portal/thanks')
                        }}>
                        Pagar <span className="badge">{items.length}</span>
                    </a>
                </p>
            )}
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
