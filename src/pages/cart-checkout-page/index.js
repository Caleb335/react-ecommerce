import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const CartCheckoutPage = (props) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cardSecretNum, setCardSecretNum] = useState("");

  const { cartItems, cartTotalPrice } = props;
  return (
    <div className="container">
      <div className="wrapper">
        <div className="main-cart">
          <div className="shop-text">
            <h3>Shopping Cart</h3>
          </div>
          <div className="cart-wrapper">
            {cartItems.length ? (
              cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
              })
            ) : (
              <div style={{ textAlign: "center" }}>Your cart is empty xx</div>
            )}
          </div>
          <div className="total">
            <div>
              <Link className="goback" to="./products">
                {" "}
                &larr; Continue Shopping
              </Link>
            </div>
            <div>
              <span style={{ color: "#8d8f97" }}>Subtotal: </span>$
              {cartTotalPrice}.00
            </div>
          </div>
        </div>
        <div className="checkout">
          <div className="content">
            <h3 className="card-details">Card Details</h3>
            <div className="card-type">
              <p className="card-type-text">Card Type</p>
              <div className="card-design">
                <div className="smart-card">
                  <div className="card-details">
                    <span style={{ fontSize: 24 }}>VISA</span>
                    <input
                      placeholder="**** **** **** ****"
                      value={cardNumber}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      className="flex-details"
                    >
                      <input
                        placeholder="CIROMA ADEKUNLE CHUKWUMA"
                        value={cardName}
                      />
                      <span>{`${expiryMonth} / ${expiryYear}`}</span>
                    </div>
                  </div>
                </div>
                <div className="mastercard">
                  <i class="mastercard-icon"></i>
                  <span>mastercard</span>
                </div>
              </div>
            </div>
            <div>
              <form>
                <label className="card-type-text" for="name">
                  Name on Card
                </label>
                <input
                  className="credit-card"
                  id="name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="CIROMA ADEKUNLE CHUKWUMA"
                  type="text"
                  required
                />

                <label className="card-type-text" for="ccn">
                  Credit Card Number:
                </label>
                <input
                  className="credit-card"
                  id="ccn"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9\s]{13,19}"
                  autocomplete="cc-number"
                  maxlength="19"
                  placeholder="**** **** **** ****"
                ></input>

                <div className="expcvv">
                  <div className="expc">
                    <label className="card-type-text" for="exp">
                      Expiration Date
                    </label>
                    <div className="mmyywrap">
                      <select
                        className="credit-card expp"
                        name="expMonth"
                        value={expiryMonth}
                        onChange={(e) => setExpiryMonth(e.target.value)}
                      >
                        <option> mm </option>
                        <option value="01">Jan</option>
                        <option value="02">Feb</option>
                        <option value="03">Mar</option>
                        <option value="04">Apr</option>
                        <option value="05">May</option>
                        <option value="06">Jun</option>
                        <option value="07">Jul</option>
                        <option value="08">Aug</option>
                        <option value="09">Sept</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                      </select>

                      <select
                        className="credit-card expp"
                        name="expYear"
                        value={expiryYear}
                        onChange={(e) => setExpiryYear(e.target.value)}
                      >
                        <option>yyyy</option>
                        <option value="20">2020</option>
                        <option value="21">2021</option>
                        <option value="22">2022</option>
                        <option value="23">2023</option>
                        <option value="24">2024</option>
                        <option value="25">2025</option>
                      </select>
                    </div>
                  </div>
                  <div className="pcvv">
                    <label className="card-type-text" for="cvv">
                      CVV
                    </label>
                    <input
                      className="credit-card cvv"
                      value={cardSecretNum}
                      onChange={(e) => setCardSecretNum(e.target.value)}
                      id="name"
                      placeholder="XXX"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <input
                  className="checkout-btn"
                  value="Check Out"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.japacart.cartItems,
    cartTotalPrice: state.japacart.cartItems.reduce(
      (acc, arr) => acc + arr.quantity * arr.price.substring(1),
      0
    ),
  };
};

export default connect(mapStateToProps)(CartCheckoutPage);
