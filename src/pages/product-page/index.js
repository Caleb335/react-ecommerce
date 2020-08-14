import React from 'react';
import './style.scss';
import { birthdayCakes, weddingCakes, cupCakes, others } from '../../Data';

const ProductPage = () => {
  return (
    <div className='product_page'>
      <div className='banner'>
        <div>
          <p>The Best Cakes in Every Category</p>
          <input type='text' placeholder='Search for a cake...' />
        </div>
      </div>

      <div className='image-gallery'>
        {/* instead of hard coding the UI of multiple cake cards you can use the
         * javascript map method to represent the UI
         * It saves you the stress of having to copy and paste on multiple lines
         * therefore, making our code shorter and cleaner.
         */}
        <div className='row'>
          <h2>Birthday Cakes</h2>
          {birthdayCakes.map(birthdayCake => {
            return (
              <div key={birthdayCake.id} birthdaycake={birthdayCake} className='cakes'>
                <div className=' column col-lg-3 col-md-4 col-sm-6 shadow' style={{ borderRadius: '50%' }}>
                  <div className='card text-center shadow-lg ' style={{ marginTop: '25px', marginBottom: '25px', borderRadius: '5%' }}>
                    <div className='px-5 pt-5'>
                      <img src={birthdayCake.imageUrl} className='card-img-top img-fluid' alt='birthday cake' />
                    </div>
                    <div className='card-body'>
                      <h1 className='card-title'>{birthdayCake.name}</h1>
                      <p className='price'>Amount: {birthdayCake.price}</p>
                      <button href='#' className='btn btn-danger'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* cup cakes section */}
        <div className='row'>
          <h2>Cup Cakes</h2>
          {cupCakes.map(cupCake => {
            return (
              <div key={cupCake.id} cupcake={cupCake} className='cakes'>
                <div className=' column col-lg-3 col-md-4 col-sm-6' style={{ borderRadius: '50%' }}>
                  <div className='card text-center shadow-lg ' style={{ marginTop: '25px', marginBottom: '25px', borderRadius: '5%' }}>
                    <div className='px-5 pt-5'>
                      <img src={cupCake.imageUrl} className='card-img-top img-fluid' alt='cup cakes' />
                    </div>
                    <div className='card-body'>
                      <h1 className='card-title'>{cupCake.name}</h1>
                      <p className='price'>Amount: {cupCake.price}</p>
                      <button href='#' className='btn btn-danger'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* wedding cakes section */}
        <div className='row'>
          <h2>Wedding Cakes</h2>
          {weddingCakes.map(weddingCake => {
            return (
              <div key={weddingCake.id} weddingcake={weddingCake} className='cakes'>
                <div className=' column col-lg-3 col-md-4 col-sm-6' style={{ borderRadius: '50%' }}>
                  <div className='card text-center shadow-lg ' style={{ marginTop: '25px', marginBottom: '25px', borderRadius: '5%' }}>
                    <div className='px-5 pt-5'>
                      <img src={weddingCake.imageUrl} className='card-img-top img-fluid' alt='cup cakes' />
                    </div>
                    <div className='card-body'>
                      <h1 className='card-title'>{weddingCake.name}</h1>
                      <p className='price'>Amount: {weddingCakes.price}</p>
                      <button href='#' className='btn btn-danger'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* other types of cake */}
        <div className='row'>
          <h2>Other cakes</h2>
          {others.map(otherTypes => {
            return (
              <div key={otherTypes.id} othertypes={otherTypes} className='cakes'>
                <div className=' column col-lg-3 col-md-4 col-sm-6' style={{ borderRadius: '50%' }}>
                  <div className='card text-center shadow-lg ' style={{ marginTop: '25px', marginBottom: '25px', borderRadius: '5%' }}>
                    <div className='px-5 pt-5'>
                      <img src={otherTypes.imageUrl} className='card-img-top img-fluid' alt='cup cakes' />
                    </div>
                    <div className='card-body'>
                      <h1 className='card-title'>{otherTypes.name}</h1>
                      <p className='price'>Amount: {otherTypes.price}</p>
                      <button href='#' className='btn btn-danger'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
