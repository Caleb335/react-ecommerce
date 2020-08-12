import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, increaseItemQuantity, decreaseItemQuantity } from '../../Redux/Cart/CartActions';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, clearItem, increaseItemQuantity, decreaseItemQuantity }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='cart-item'>
      <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }} className='for-picture'></div>
      <div style={{ width: '30%' }}>{name}</div>
      <div className='the-quantity'>
        <span onClick={() => decreaseItemQuantity(cartItem)} className='mod-item'>
          {' '}
          -{' '}
        </span>
        <span className='quantity'> {quantity} </span>
        <span onClick={() => increaseItemQuantity(cartItem)} className='mod-item'>
          {' '}
          +{' '}
        </span>
      </div>
      <div className='price'>{price}</div>
      <div onClick={() => clearItem(cartItem)} className='mod-item cancel'>
        x
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clearItem: item => dispatch(clearItemFromCart(item)),
    increaseItemQuantity: item => dispatch(increaseItemQuantity(item)),
    decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item))
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
