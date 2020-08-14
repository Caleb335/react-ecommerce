import React from 'react';
import './ProductPageCard.scss';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/CartActions';

const ProductPageCard = ({ item, addItemToCart }) => {
  const {id, imageUrl, name, price } = item;
  return (
    <div key={id}>
    <div className=' column col-lg-3 col-md-4 col-sm-6 shadow' style={{ borderRadius: '50%' }}>
      <div className='card text-center shadow-lg ' style={{ marginTop: '25px', marginBottom: '25px', borderRadius: '5%' }}>
        <div className='px-5 pt-5'>
          <img src={imageUrl} className='card-img-top img-fluid' alt='birthday cake' />
        </div>
        <div className='card-body'>
          <h1 className='card-title'>{name}</h1>
          <p className='price'>Amount: {price}</p>
          <button onClick={() => addItemToCart(item)} href='#' className='btn btn-danger'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(ProductPageCard);
