import React from 'react';
import { Link } from 'react-router-dom'
import './CartCheckout.scss'

const CartCheckoutPage = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='main-cart'>
          <div className='shop-text'>
            <h3>Shopping Cart</h3>
          </div>
          <div className='cart-wrapper'>
            <div className='cart-item'>
              <div className='for-picture'>
                
              </div>
              <div>
                Name of Item
              </div>
              <div className='the-quantity'>
                <span className='mod-item'> - </span> <span className='quantity'> 5 </span> <span  className='mod-item'> + </span>
              </div>
              <div className='price'>
                $10.50
              </div>
              <div className='mod-item cancel'>
                x
              </div>
            </div>
            <div className='cart-item'>
              <div className='for-picture'>
                
              </div>
              <div>
                Name of Item
              </div>
              <div className='the-quantity'>
                <span> - </span> <span className='quantity'> 5 </span> <span> + </span>
              </div>
              <div className='price'>
                $10.50
              </div>
              <div>
                x
              </div>
            </div>

            <div className='cart-item'>
              <div className='for-picture'>
                
              </div>
              <div>
                Name of Item
              </div>
              <div className='the-quantity'>
                <span> - </span> <span className='quantity'> 5 </span> <span> + </span>
              </div>
              <div className='price'>
                $10.50
              </div>
              <div>
                x
              </div>
            </div>

            <div className='cart-item'>
              <div className='for-picture'>
                
              </div>
              <div>
                Name of Item
              </div>
              <div className='the-quantity'>
                <span> - </span> <span className='quantity'> 5 </span> <span> + </span>
              </div>
              <div className='price'>
                $10.50
              </div>
              <div>
                x
              </div>
            </div>

          </div>       
          <div className='total'>
            <div>
              <Link className='goback' to = './products'> &larr; Continue Shopping</Link>
            </div>
            <div>
              <span style={{color: "#8d8f97"}}>Subtotal: </span>$24.90 
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
                  
                </div>
                <div className='mastercard'>

                </div>
              </div>
            </div>
            <div>
              <form>
                <label className='card-type-text' for='name'>Name on Card</label>
                <input className='credit-card' id='name' placeholder='CIROMA ADEKUNLE CHUKWUMA' type='text'required/>

                <label className='card-type-text' for="ccn">Credit Card Number:</label>
                <input className='credit-card' id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="**** **** **** ****"></input>
              
                <div className='expcvv'>
                  <div className='expc'>
                    <label className='card-type-text' for='exp'>Expiration Date</label>
                    <div className='mmyywrap'>
                      <select className='credit-card expp' name='expMonth'>
                        <option> mm </option>
                          <option value="January">01</option>
                          <option value="Febuary">02</option>
                          <option value="March">03</option>
                          <option value="April">04</option>
                          <option value="May">05</option>
                          <option value="June">06</option>
                          <option value="July">07</option>
                          <option value="August">08</option>
                          <option value="September">09</option>
                          <option value="October">10</option>
                          <option value="November">11</option>
                          <option value="December">12</option>
                      </select>

                      <select className='credit-card expp' name="expYear">
                        <option>yyyy</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                      </select>
                    </div>
                  </div>
                  <div className='pcvv'>
                    <label className='card-type-text' for='cvv'>CVV</label>
                    <input className='credit-card cvv' id='name' placeholder='XXX' type='text' required/>
                  </div>
                </div>


                <input className='checkout-btn' value='Check Out' type='submit'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartCheckoutPage;
