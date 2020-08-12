import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { connect } from "react-redux";
const Header = ({ currentUser }) => {
  return (
<<<<<<< HEAD
    <div className='header__base'>
      <header>
        <div className='brand'>
          <Link to='/'>Foldables</Link>
        </div>
        <nav>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/aboutus'>About Us</Link>
            </li>
            <li className='nav-item'>
              <Link to='contact'>Contact</Link>
            </li>
            <li className='nav-item'>
              <Link to='products'>Products</Link>
            </li>
            {currentUser ? (
              <li className='nav-item'>
                <button onClick={() => auth.signOut()} className='signOut-btn'>
=======
    <div className="header__base">
      <header>
        <div className="brand">
          <Link to="/">Foldables</Link>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="products">Products</Link>
            </li>
            {currentUser ? (
              <li className="nav-item">
                <button onClick={() => auth.signOut()} className="signOut-btn">
>>>>>>> 24187d4ab60eb022ec5fdfa1ab0cfea51d00fe85
                  Sign Out
                </button>
              </li>
            ) : (
<<<<<<< HEAD
              <li className='nav-item'>
                <Link to='signin'>Sign In</Link>
              </li>
            )}

            <li className='nav-item'>
              <Link to='cart'>
                Cart <i className='fa fa-cart-arrow-down'></i>
=======
              <li className="nav-item">
                <Link to="signin">Sign In</Link>
              </li>
            )}

            <li className="nav-item">
              <Link to="cart">
                Cart <i className="fa fa-cart-arrow-down"></i>
>>>>>>> 24187d4ab60eb022ec5fdfa1ab0cfea51d00fe85
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps, null)(Header);
