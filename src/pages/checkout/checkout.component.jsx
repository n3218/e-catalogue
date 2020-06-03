import React, { useContext } from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/strip-button/strip-button.component';
import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutPage = () => {
    const { cartItems, cartItemsTotal } = useContext(CartContext)

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <div className='total'>TOTAL: ${cartItemsTotal}</div>
            <div className='test-warning'>
                *Please use the folloving test credit card for payment*
            <br />
            4242424242424242 - Exp: Any future date - CVC: Any 3 digits
        </div>
            <StripeCheckoutButton price={cartItemsTotal} />
        </div>
    )
}


export default CheckoutPage