import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../Redux/Cart/CartActions'
import { PaystackButton } from 'react-paystack'

import './style.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const CartCheckoutPage = props => {
  const publicKey = "pk_test_229c380a24cd09ddd6965f020ee67af6356f356d"
  const amount = props.cartTotalPrice * 100 * 450 // Remember, set in kobo!
  const [name, setCardName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now With Paystack",
    onSuccess: () => {
      for (let oneItem of cartItems) {
        props.dispatch(clearItemFromCart(oneItem))
      }
    },

    onClose: () => {
      alert('guy you no for like buy cake?')
    },
  }


  const { cartItems, cartTotalPrice } = props;
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='main-cart'>
          <div className='shop-text'>
            <h3>Shopping Cart</h3>
          </div>
          <div className='cart-wrapper'>
            {cartItems.length ? (
              cartItems.map(cartItem => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
              })
            ) : (
              <div style={{ textAlign: 'center' }}>Your cart is empty xx</div>
            )}
          </div>
          <div className='total'>
            <div>
              <Link className='goback' to='./products'>
                {' '}
                &larr; Continue Shopping
              </Link>
            </div>
            <div>
            <span style={{ color: '#8d8f97' }}>Subtotal: </span>${cartTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00 <br/>
            <span style={{ color: '#8d8f97' }}>Subtotal: </span>₦{(amount/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00 at a rate of ₦400 = $1
            </div>
          </div>
        </div>
        <div className='checkout'>
          <div className='content'>
            <h3 className='card-details'>Card Details</h3>
            <div className='card-type'>
              <p className='card-type-text'>Card Type</p>
              <div className='card-design'>
                <div className='smart-card'>
                  <div className='card-details'>
                    <span style={{ fontSize: 24 }}>VISA</span>
                    <span>4242 4242 4242 4242</span>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                      className='flex-details'
                    >
                      <input style={{ fontSize: 16 }} placeholder='CIROMA ADEKUNLE CHUKWUMA' value={name.toUpperCase()} />
                      {/* <span>CIROMA ADEKUNLE CHUKWUMA</span> */}
                      <span
                        style={{ width: 70, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >06 / 24</span>
                    </div>
                  </div>
                </div>
                <div className='mastercard'>
                  <i className='mastercard-icon'></i>
                  <span>mastercard</span>
                </div>
              </div>
            </div>
            <div>
              <form>
              <label className='card-type-text'htmlFor='name'>
                  Name on Card
                </label>
                <input
                  className='credit-card'
                  id='name'
                  value={name}
                  onChange={e => setCardName(e.target.value)}
                  placeholder='CIROMA ADEKUNLE CHUKWUMA'
                  type='text'
                  required
                />

                <label className='card-type-text'htmlFor='ccn'>
                  Phone Number:
                </label>
                <input
                  className='credit-card'
                  id='ccn'
                  value={phone}
                  onChange={e => setPhoneNumber(e.target.value)}
                  type='tel'
                  inputMode='numeric'
                  maxLength='11'
                  placeholder='080F OLD ABLES'
                ></input>


                <label className='card-type-text'htmlFor='ccn'>
                  Email Address:
                </label>
                <input
                  className='credit-card'
                  id='ccn'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  placeholder='buycakes@foldables.com'
                ></input>
                
                {/* <input className='checkout-btn' value='Check Out' type='submit' /> */}

                      
              </form>
                <PaystackButton className='checkout-btn' {...componentProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.japacart.cartItems,
    cartTotalPrice: state.japacart.cartItems.reduce((acc, arr) => acc + arr.quantity * arr.price.substring(1), 0)
  };
};

export default connect(mapStateToProps)(CartCheckoutPage);
