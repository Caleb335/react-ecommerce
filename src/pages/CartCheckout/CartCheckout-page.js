import React from 'react';
import './CartCheckout.scss'

const CartCheckoutPage = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='main-cart'>
          <div className='shop-text'>
            Shopping Cart
          </div>
          <div className='cart-item'>
            <div className='for-picture'>
              circular picture
            </div>
            <div>
              Name of Item
            </div>
            <div>
              <span> - </span> <span className='quantity'> 5 </span> <span> + </span>
            </div>
            <div className='price'>
              $10.50
            </div>
            <div>
              x
            </div>
          </div>

          <div className='total'>
            <div>
              --- continue shopping
            </div>
            <div>
              Subtotal: $24.90 
            </div>

          </div>

        </div>
        <div className='checkout'>
          <div className='content'>
            <h3>Card Details</h3>
            <div className='card-type'>
              Card Type
            </div>
            <div>
              <form>
                <label for='name'>Name on Card</label>
                <input id='name' type='text'required/>

                <label for="ccn">Credit Card Number:</label>
                <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"></input>
              
                <label for='exp'>Expiration Date</label>
                <select name='expMonth'>
                  <option>- Month -</option>
                    <option value="January">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>

                <select name="expYear">
                  <option>- Year -</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>

                <input value='Check Out' type='submit'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartCheckoutPage;
