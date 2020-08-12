import React from "react";
import "./MenuItem.scss";
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/CartActions";

const MenuItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <figure>
      <img src={imageUrl} className="product" alt="" />
      <figcaption>
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <button onClick={() => addItemToCart(item)}>Add to cart</button>
      </figcaption>
    </figure>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(MenuItem);
