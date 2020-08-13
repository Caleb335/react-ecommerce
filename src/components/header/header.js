import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { auth } from '../../firebase/utils';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, cartQuantity }) => {
  return (
    <div className='header__base'>
      <header>
        <div className='brand'>
          <Link to='/'>Foldables</Link>
        </div>
        <div
          className='hbg'
          onClick={e => {
            e.target.nextElementSibling.style.visibility === 'hidden'
              ? (e.target.nextElementSibling.style.visibility = 'visible')
              : (e.target.nextElementSibling.style.visibility = 'hidden');
            e.target.nextElementSibling.style.opacity === '0'
              ? (e.target.nextElementSibling.style.opacity = '1')
              : (e.target.nextElementSibling.style.opacity = '0');
          }}
        >
          <span></span>
        </div>
        <nav>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='nav-item'>
              <Link to='/products'>Products</Link>
            </li>
            {currentUser ? (
              <li className='nav-item'>
                <button onClick={() => auth.signOut()} className='signOut-btn'>
                  Sign Out
                </button>
              </li>
            ) : (
              <li className='nav-item'>
                <Link to='signin'>Sign In</Link>
              </li>
            )}
            <li style={{ position: 'relative' }} className='nav-item'>
              <Link to='cart'>
                Cart <i className='fa fa-cart-arrow-down'></i>
              </Link>
              <div className='cart-count'>{cartQuantity}</div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = ({ user, japacart }) => ({
  currentUser: user.currentUser,
  cartQuantity: japacart.cartItems.reduce((acc, arr) => acc + arr.quantity, 0)
});
export default connect(mapStateToProps, null)(Header);
