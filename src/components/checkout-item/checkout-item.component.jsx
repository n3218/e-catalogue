import React, { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../providers/cart/cart.provider'


const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext)

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItem(cartItem)} className='arrow'>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div onClick={() => clearItemFromCart(cartItem)} className='remove-button'>&#10005;</div>
    </div>
  )
}


export default CheckoutItem